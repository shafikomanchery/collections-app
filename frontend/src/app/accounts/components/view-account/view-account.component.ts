import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss'],
})
export class ViewAccountComponent implements OnInit {
  account!: Account;

  constructor() {}

  ngOnInit() {}

  getAccountStatusBg = (status: string) => AppUtil.getStatusBg(status);
}
