import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private datas  = 
[
{  id: "1",
    name: "Arroz",
    age: 22 },
{  id: "2",
    name: "Jayson",
    age: 22 },
{  id: "3",
    name: "Jarryd",
    age: 23 },
{  id: "4",
    name: "Carlos",
    age: 26 }
];

  constructor() { }

  ngOnInit() {
  }

}
