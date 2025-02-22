import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss'],
})
export class ListAccountsComponent implements OnInit {
  accounts: Account[] = [];

  constructor() {}

  ngOnInit() {}

  getAccountStatusBg = (status: string) => AppUtil.getStatusBg(status);
}
