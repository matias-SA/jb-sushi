import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
      }
    });
  }
  ngOnInit(): void {}
  toContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  toMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
  toGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
}
