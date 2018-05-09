import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
private navigation  = 
[
{  home: "Home" ,about: "About" ,users: "Users",products: "Products"}
];
  constructor() { }

  ngOnInit() {
  }

}
