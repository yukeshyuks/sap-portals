import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotationComponent } from './dashboard/quotation/quotation.component';
import { LoginComponent } from './login/login.component';
import { PurchaseorderComponent } from './dashboard/purchaseorder/purchaseorder.component'; 
import { ReceiptComponent } from './dashboard/receipt/receipt.component'; 
import { InvoiceComponent } from './finance sheet/invoice/invoice.component'; 
import { PaymentsComponent } from './finance sheet/payments/payments.component';
import { CredebComponent } from './finance sheet/credeb/credeb.component'; 
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';
import { DashnavComponent } from './dashnav/dashnav.component';
import { FinnavComponent } from './finnav/finnav.component';
import { ProfilenavComponent } from './profilenav/profilenav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuotationComponent,
    PurchaseorderComponent,
    ReceiptComponent,
    InvoiceComponent,
    PaymentsComponent,
    CredebComponent,
    ProfileComponent,
    PagenotfoundComponent,
    HomeComponent,
    HomenavComponent,
    DashnavComponent,
    FinnavComponent,
    ProfilenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
