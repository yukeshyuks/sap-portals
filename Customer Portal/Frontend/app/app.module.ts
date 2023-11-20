import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProfileviewComponent } from './profilepage/profileview/profileview.component';
import { DashboardComponent } from './custdashboard/dashboard/dashboard.component';
import { FinanceComponent } from './financesheet/finance/finance.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustnavComponent } from './custdashboard/custnav/custnav.component';
import { FinnavComponent } from './financesheet/finnav/finnav.component';
import { SalesorderComponent } from './custdashboard/salesorder/salesorder.component';
import { DeliveryComponent } from './custdashboard/delivery/delivery.component';
import { PaymentsComponent } from './financesheet/payments/payments.component';
import { MemoComponent } from './financesheet/memo/memo.component';
import { SalesComponent } from './financesheet/sales/sales.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './home/homenav/homenav.component';
import { ProfilenavComponent } from './profilepage/profilenav/profilenav.component';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileviewComponent,
    DashboardComponent,
    FinanceComponent,
    PagenotfoundComponent,
    CustnavComponent,
    FinnavComponent,
    SalesorderComponent,
    DeliveryComponent,
    PaymentsComponent,
    MemoComponent,
    SalesComponent,
    HomeComponent,
    HomenavComponent,
    ProfilenavComponent,
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
