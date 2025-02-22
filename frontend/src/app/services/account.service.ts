import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UrlService } from '../shared/services/url.service';
import { Account } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  private urlService = inject(UrlService);

  getAccounts() {
    const apiUrl = this.urlService.getAccountsUrl();
    return this.http.get<Account[]>(apiUrl);
  }

  createAccount(account: Account) {
    const apiUrl = this.urlService.createAccountUrl();
    return this.http.post<Account>(apiUrl, account);
  }

  updateAccount(account: Account) {
    const apiUrl = this.urlService.updateAccountUrl();
    return this.http.post<Account>(apiUrl, account);
  }

  deleteAccount(accountId: number) {
    const apiUrl = this.urlService.deleteAccountUrl();
    return this.http.post<Account>(apiUrl, { accountId });
  }

  getAccountById(accountId: number) {
    const apiUrl = this.urlService.getAccountByIdUrl(accountId);
    return this.http.get<Account>(apiUrl);
  }
}
