import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{

  showSidebar = false;

  ngOnInit() {
    this.showSidebar = false;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      console.log(this.router.url);
      this.showSidebar = !this.router.url.includes('/login');
    });
  }
}
