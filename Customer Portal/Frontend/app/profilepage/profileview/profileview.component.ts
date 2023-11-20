import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {


header = ["Customer Number","Country code","City","Postal Code","Telephone","Sort field"];
  constructor(private router : Router , private http: HttpClient) { }
  custprofile:any;

  ngOnInit(): void {
    this.http.post("http://localhost:3030/custprofile","").subscribe(resp=>{
      this.custprofile = resp;
      console.log(this.custprofile);
  })
}

}

