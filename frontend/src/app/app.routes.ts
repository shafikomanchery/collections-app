import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from './shared/components/not-found-error/not-found-error.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'entities',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('./entity/entity.module').then(
        (m) => m.EntityModule
      ),
  },
  {
    path: '404',
    component: NotFoundErrorComponent,
  },
  {
    path:'**',
    redirectTo:'404',
    pathMatch: 'full'
  }
];
