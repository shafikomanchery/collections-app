import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserProfile } from '../../../models/user';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  private userService = inject(UserService);

  userProfiles: UserProfile[]= [];

  constructor() { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: UserProfile[]) => {
        console.log(data)
       this.userProfiles = data;
    })
  }

  

  getStatusBg = (status: string) => AppUtil.getStatusBg(status);
  getAvatarByGender = (gender: string) => AppUtil.getAvatarByGender(gender);
}
