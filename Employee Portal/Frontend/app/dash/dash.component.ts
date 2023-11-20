import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  constructor(private router: Router) { }
  
  onCardClick() {
    this.router.navigate(['/payslip']);
  }

  onCardClick1() {
    this.router.navigate(['/leave']);
  }
}
