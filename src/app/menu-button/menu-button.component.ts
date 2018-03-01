import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  //Constructor: Injecting menu service data.
  constructor( private _menu_data: MenuService ) { }

  ngOnInit() {}

  isActive():boolean {
    return this._menu_data.isActive();
  }
  
  toggleMenuState() {
    this._menu_data.toogleMenuState();
  }
}
