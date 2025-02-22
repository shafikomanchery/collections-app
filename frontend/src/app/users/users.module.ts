import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [UsersComponent, UpdateUserComponent, ListUsersComponent,ViewUserComponent],
  exports:[ListUsersComponent]
})
export class UsersModule { }
