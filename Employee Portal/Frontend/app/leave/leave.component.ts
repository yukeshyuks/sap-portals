import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {


  header = ["No of days Leave Taken","Total Leave Hours","Type of Leave","Leave Category","Start of leave","End of leave"];
    constructor(private router : Router , private http: HttpClient) { }
    empleave:any;
  
    ngOnInit(): void {
      this.http.post("http://localhost:3030/empleave","").subscribe(resp=>{
        this.empleave = resp;
        console.log(this.empleave);
    })
  }

  }