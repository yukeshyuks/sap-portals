import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {


  header = ["Company code","Billing document","Exchange Rate","Document Currency","Country"];
    constructor(private router : Router , private http: HttpClient) { }
    custsales:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custsales","").subscribe(resp=>{
        this.custsales = resp;
        console.log(this.custsales);
    })
  }
  
  }
