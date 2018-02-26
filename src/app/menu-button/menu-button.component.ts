import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  // State variable which indicates if the menu is active.
  menu_active: boolean;

  //Constructor
  constructor() { }

  // Component setup
  ngOnInit() {
    this.menu_active = false;
  }

  // Function called when user clicks the button.
  menuButtonClicked() {
    this.menu_active = !this.menu_active;
    if( this.menu_active )
      this.openMenu();
    else
      this.closeMenu();
  }

  openMenu(){
    console.log("Open Menu");
  }

  closeMenu(){
    console.log("Close Menu");
  }
}
