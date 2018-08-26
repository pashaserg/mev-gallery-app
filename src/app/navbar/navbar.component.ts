import { Component, OnInit } from '@angular/core';

const NAV_LINKS = [
  {
    title: 'Home',
    link: ['#'],
  }
]

@Component({
  selector: 'mev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav_links = NAV_LINKS;
  
  title = 'Gallery';
  constructor() { }

  ngOnInit() {
  }

}
