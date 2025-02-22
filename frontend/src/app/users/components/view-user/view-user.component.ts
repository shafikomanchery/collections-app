import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserProfile } from '../../../models/user';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent{
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  user!: UserProfile;

  constructor() { 
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(parseInt(userId!)).subscribe((data: UserProfile) =>{
      this.user = data;
    });
  }

  getAvatarByGender = (gender: string) => AppUtil.getAvatarByGender(gender);

  getUserStatusBg = (status: string) => AppUtil.getStatusBg(status);

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe(data => {
      console.log('User deleted!');
    })
  }

}
