import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Entity, Status } from '../../../models';
import { EntityService } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.scss']
})
export class CreateEntityComponent implements OnInit {

  private entityService = inject(EntityService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  formGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    tagline: new FormControl(''),
    logo: new FormControl(null),
    registrationNo: new FormControl('',[Validators.required]),
    address: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    phone: new FormControl('',[Validators.required]),
    mobile: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  submit(){
    if(!this.formGroup.valid){
      this.formGroup.markAllAsTouched()
      return;
    }{
      const entity = {
        ...this.formGroup.getRawValue(),
        status: Status.ACTIVE,
      } as unknown as Entity;
      this.entityService.createEntity(entity).subscribe(entity => {
        console.log('Entity is created!');
        this.router.navigate(['../list'],{relativeTo: this.route});
      })
    }
  }

}
