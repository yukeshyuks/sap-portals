import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {


  header = ["Customer Number","Document Number","Fiscal year","No of line item","Amount in Ledger","Currency"];
    constructor(private router : Router , private http: HttpClient) { }
    custcredit:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custcredit","").subscribe(resp=>{
        this.custcredit = resp;
        console.log(this.custcredit);
    })
  }
  
  }
  