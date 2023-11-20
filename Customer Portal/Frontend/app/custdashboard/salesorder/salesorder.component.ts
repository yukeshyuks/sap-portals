import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
export class SalesorderComponent implements OnInit {


  header = ["Billing Date","Payment term","Pricing Date","Origin number","Payment Reference"];
    constructor(private router : Router , private http: HttpClient) { }
    custsales:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custsales","").subscribe(resp=>{
        this.custsales = resp;
        // console.log(this.custsales);
    })
  }
  
  }