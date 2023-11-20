import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {
  header = ["Effective Value","Information Record","Gross value","Net Value","Text Info"];
    constructor(private router : Router , private http: HttpClient) { }
    vendpurchase:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/vendpurchase","").subscribe(resp=>{
        this.vendpurchase = resp;
        console.log(this.vendpurchase);
    })
  }
  
  }