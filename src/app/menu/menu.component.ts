import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _menu_data: MenuService) { }

  ngOnInit() {
  }

  // Returns when the menu is open trough the menu service.
  isActive():boolean {
    return this._menu_data.isActive();
  }
}
