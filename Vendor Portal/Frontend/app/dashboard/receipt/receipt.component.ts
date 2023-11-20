import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  header = ["Company code","Document Date","Gross amount","Entry Date","Invoice Status"];
    constructor(private router : Router , private http: HttpClient) { }
    vendreceipt:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/vendreceipt","").subscribe(resp=>{
        this.vendreceipt = resp;
        console.log(this.vendreceipt);
    })
  }
  
  }