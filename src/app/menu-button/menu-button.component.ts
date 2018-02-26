import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  menu_is_active: boolean;

  //Constructor
  constructor() { }

  // Component setup
  ngOnInit() {
    this.menu_is_active = false;
  }

  // Function called when user clicks the button. It toggles menu state
  // and opens or closes it.
  toggleState() {
    this.menu_is_active = this.menu_is_active === false ? true : false;
    this.menu_is_active === false ? this.openMenu() : this.closeMenu();
  }

  openMenu(){
    console.log("Open Menu");
  }

  closeMenu(){
    console.log("Close Menu");
  }
}
