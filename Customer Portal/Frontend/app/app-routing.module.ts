import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './custdashboard/dashboard/dashboard.component';
import { DeliveryComponent } from './custdashboard/delivery/delivery.component';
import { FinanceComponent } from './financesheet/finance/finance.component';
import { LoginComponent } from './loginpage/login/login.component';
import { MemoComponent } from './financesheet/memo/memo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentsComponent } from './financesheet/payments/payments.component';
import { ProfileviewComponent } from './profilepage/profileview/profileview.component';
import { SalesComponent } from './financesheet/sales/sales.component';
import { SalesorderComponent } from './custdashboard/salesorder/salesorder.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
  {
    path: 'profile',
    component: ProfileviewComponent,
  },

  {
    path: 'salesorder',
    component: SalesorderComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'memo',
    component: MemoComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
