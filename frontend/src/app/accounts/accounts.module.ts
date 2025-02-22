import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../users/users.module';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsersModule,
  ],
  declarations: [CreateAccountComponent,ViewAccountComponent,ListAccountsComponent,PaymentComponent, PaymentsComponent],
  exports:[CreateAccountComponent,ViewAccountComponent,ListAccountsComponent,PaymentComponent, PaymentsComponent]
})
export class AccountsModule { }
