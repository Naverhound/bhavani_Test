import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../../styles.css']
})
export class NavbarComponent implements OnInit {
  navigation_links = [
    {
      name: 'About Us',
      path: '/',
    },
    {
      name: 'Microdosis',
      path: '/',
    },
    {
      name: 'Tratamiento',
      path: '/',
    },
    {
      name: 'Blog',
      path: '/',
    },
    {
      name: 'Mi perfil',
      path: '/',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
