import { inject, Injectable } from '@angular/core';
import { User, UserProfile } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models';
import { UrlService } from '../shared/services/url.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);
  private urlService = inject(UrlService);

  addUser(user: UserProfile) {
    const apiUrl = this.urlService.createUserUrl();
    const newUser = {
      ...user,
      status: Status.ACTIVE,
    };
    return this.http.post<User>(apiUrl,newUser);
  }

  deleteUser(userId: number) {
    const apiUrl = this.urlService.deleteUserUrl();
    return this.http.post<UserProfile>(apiUrl, { userId });
  }

  getUserById(userId: number) {
    const apiUrl = this.urlService.getUserByIdUrl(userId);
    return this.http.get<UserProfile>(apiUrl);
  }

  getUsers(): Observable<UserProfile[]> {
    const apiUrl = this.urlService.getUsersUrl();
    return this.http.get<UserProfile[]>(apiUrl);
  }

  updateUser(user: Partial<UserProfile>){
    const apiUrl = this.urlService.updateUserUrl();
    return this.http.post<UserProfile>(apiUrl,user);
  }
}
