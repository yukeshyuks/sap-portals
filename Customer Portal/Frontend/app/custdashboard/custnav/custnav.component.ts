import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-custnav',
  templateUrl: './custnav.component.html',
  styleUrls: ['./custnav.component.css']
})

export class CustnavComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Call a method to highlight the active link.
        this.highlightActiveLink();
      }
    });
  }
  highlightActiveLink() {
    // Get the current route from the ActivatedRoute service.
    let currentRoute = this.route.root;
    while (currentRoute.children[0] !== undefined) {
      currentRoute = currentRoute.children[0];
    }
    // Get the URL of the current route.
    let url = currentRoute.snapshot.url.join('/');
    
    // Find the corresponding navbar link and apply the "active" class.
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      if (link.getAttribute('routerLink') === url) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  

}
