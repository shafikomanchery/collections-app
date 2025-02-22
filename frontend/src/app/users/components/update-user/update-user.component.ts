import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User, UserProfile } from '../../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);
  private activateRoute = inject(ActivatedRoute);

  userId!: string;

  formGroup = new FormGroup({
    firstname: new FormControl<string | null>(null, [Validators.required]),
    lastname: new FormControl<string | null>(null, [Validators.required]),
    registerno: new FormControl<string | null>(null, [Validators.required]),
    gender: new FormControl<string | null>(null, [Validators.required]),
    homeaddress: new FormControl<string | null>(null),
    emailAddress: new FormControl<string | null>(null, [Validators.required]),
    phone: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    mobile: new FormControl<number | null>(
      null,
      this.patternValidator(/^[0-9]{10}$/)
    ),
  });

  constructor() {}

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.paramMap.get('id') ?? '';
    if (this.userId) {
      this.userService
        .getUserById(parseInt(this.userId))
        .subscribe((data: User) => {
          this.formGroup.patchValue({
            ...data,
          });
        });
    }else{
      this.router.navigate(['../list'], { relativeTo: this.activateRoute });
    }
  }

  submit(action: string) {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const user = this.formGroup.getRawValue() as Partial<UserProfile>;
    const updateUser = {
      ...user,
      userId: parseInt(this.userId),
    };
    this.userService.updateUser(updateUser).subscribe((data: User) => {
      console.log('user is updated!');
      this.router.navigate(['../list'], { relativeTo: this.activateRoute });
    });
  }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['../list'], { relativeTo: this.activateRoute });
  }

  patternValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const valid = pattern.test(control.value);
      return valid ? null : { pattern: { value: control.value } };
    };
  }
}
