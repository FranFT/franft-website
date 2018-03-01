import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  options = [];

  constructor(private _menu_data: MenuService) { }

  ngOnInit() {
    this._menu_data.option.subscribe(res => this.options = res );
  }

  // Returns when the menu is open trough the menu service.
  isActive() {
    return this._menu_data.isActive();
  }
}
