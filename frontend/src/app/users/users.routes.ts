import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { Routes } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent,
      },
      {
        path: 'create',
        component: UpdateUserComponent,
      },
      {
        path: 'user/:id',
        component: ViewUserComponent,
      },
      {
        path: 'user/:id/edit',
        component: UpdateUserComponent,
      },
      {
        path:'**',
        redirectTo:'list',
        pathMatch:'full'
      }
    ],
  },
];
