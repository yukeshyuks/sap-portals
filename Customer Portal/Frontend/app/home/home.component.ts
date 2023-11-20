import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  
  onCardClick() {
    this.router.navigate(['/dashboard']);
  }

  onCardClick1() {
    this.router.navigate(['/finance']);
  }
}
