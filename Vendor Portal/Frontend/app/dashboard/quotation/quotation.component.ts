import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  header = ["Document No","Gross Amount","Quotation Date","Currency","Quotation Status"];
    constructor(private router : Router , private http: HttpClient) { }
    vendquota:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/vendreceipt","").subscribe(resp=>{
        this.vendquota = resp;
        console.log(this.vendquota);
    })
  }
  
  }