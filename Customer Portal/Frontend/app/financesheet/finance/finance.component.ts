import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  header = ["Company Id","Pricing procedure","Document Date","Payment reference","Country","Currency"];
    constructor(private router : Router , private http: HttpClient) { }
    custinvoice:any;
  pdf:any;
    ngOnInit(): void {
      this.http.post("http://localhost:3030/custinvoice","").subscribe(resp=>{
        this.custinvoice = resp;
        console.log(this.custinvoice);
    })
  }
  downloadPDF() {
    this.http.post("http://localhost:3030/custinvoice_form", "").subscribe((resp: any) => {
    this.pdf = resp.xmljs;
    console.log(this.pdf);
    const linkSource = `data:application/pdf;base64,${this.pdf}`;
    const downloadLink = document.createElement('a');
    const fileName = "abc.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  })
  }
}