import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  header = ["Customer Id","Document No","Company Code","Document Date","Tax Amount","Currency"];
    constructor(private router : Router , private http: HttpClient) { }
    custpayments:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custpayments","").subscribe(resp=>{
        this.custpayments = resp;
        console.log(this.custpayments);
    })
  }

  }