import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  header = ["Sale Document","Sold to party","Document Date","Net value","Telephone"];
    constructor(private router : Router , private http: HttpClient) { }
    custinquiry:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custinquiry","").subscribe(resp=>{
        this.custinquiry = resp;
        console.log(this.custinquiry);
    })
  }
  
  }