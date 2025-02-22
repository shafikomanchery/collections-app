import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {

  getUsersUrl() {
    return `${environment.hostname}/${environment.projectname}/api/users/getusers.php`;
  }
  createUserUrl() {
    return `${environment.hostname}/${environment.projectname}/api/users/createuser.php`;
  }
  updateUserUrl() {
    return `${environment.hostname}/${environment.projectname}/api/users/updateuser.php`;
  }
  deleteUserUrl() {
    return `${environment.hostname}/${environment.projectname}/api/users/deleteuser.php`;
  }
  getUserByIdUrl(userId: number) {
    return `${environment.hostname}/${environment.projectname}/api/users/getuser.php?id=${userId}`;
  }

  getEntitiesUrl() {
    return `${environment.hostname}/${environment.projectname}/api/entity/getentities.php`;
  }
  createEntityUrl() {
    return `${environment.hostname}/${environment.projectname}/api/entity/createentity.php`;
  }
  updateEntityUrl() {
    return `${environment.hostname}/${environment.projectname}/api/entity/updateentity.php`;
  }
  deleteEntityUrl() {
    return `${environment.hostname}/${environment.projectname}/api/entity/deleteentity.php`;
  }
  getEntityByIdUrl(entityId: number) {
    return `${environment.hostname}/${environment.projectname}/api/entity/getentity.php?id=${entityId}`;
  }

  getAccountsUrl() {
    return `${environment.hostname}/${environment.projectname}/api/account/getaccounts.php`;
  }
  createAccountUrl() {
    return `${environment.hostname}/${environment.projectname}/api/account/createaccount.php`;
  }
  updateAccountUrl() {
    return `${environment.hostname}/${environment.projectname}/api/account/updateaccount.php`;
  }
  deleteAccountUrl() {
    return `${environment.hostname}/${environment.projectname}/api/account/deleteaccount.php`;
  }
  getAccountByIdUrl(accountId: number) {
    return `${environment.hostname}/${environment.projectname}/api/account/getaccount.php?id=${accountId}`;
  }
}
