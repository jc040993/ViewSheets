import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  menu = "TEMP";
  location = "Hyderabad";
  locations = ["Hyderabad", "Secunderabad", "XYZ"];
  
  constructor() { }

  ngOnInit() { }

  menuClick(item: string) {
    this.menu = item;
  }

}
