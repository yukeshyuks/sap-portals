import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  header = ["Personnel No","End Date","Changed On","Wage Amount","Pay Scale Group","Annual Salary"];
    constructor(private router : Router , private http: HttpClient) { }
    emppayslip:any;
  pdf:any;
    ngOnInit(): void {
      this.http.post("http://localhost:3030/emppayslip","").subscribe(resp=>{
        this.emppayslip = resp;
        console.log(this.emppayslip);
    })
  }
  downloadPDF() {
    this.http.post("http://localhost:3030/emppayslipform", "").subscribe((resp: any) => {
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