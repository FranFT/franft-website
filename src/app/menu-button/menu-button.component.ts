import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  active: boolean;

  //Constructor
  constructor() { }

  // Component setup
  ngOnInit() {
    this.active = false;
  }
}
