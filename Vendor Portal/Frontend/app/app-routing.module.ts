import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseorderComponent } from './dashboard/purchaseorder/purchaseorder.component';
import { QuotationComponent } from './dashboard/quotation/quotation.component';
import { ReceiptComponent } from './dashboard/receipt/receipt.component';
import { CredebComponent } from './finance sheet/credeb/credeb.component';
import { InvoiceComponent } from './finance sheet/invoice/invoice.component';
import { PaymentsComponent } from './finance sheet/payments/payments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'purchase',
    component: PurchaseorderComponent,
  },
  {
    path: 'quotation',
    component: QuotationComponent,
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'credeb',
    component: CredebComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent ,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'sales',
  //   component: SalesComponent,
  // },
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
