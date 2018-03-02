import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss']
})
export class MenuElementComponent implements OnInit {

  // Input parameter
  @Input() name: string;

  // Dependency Injection
  constructor(private _menu_data: MenuService) { }

  ngOnInit() { }

  // Used to close menu when user clicks on a menu-element.
  toogleMenuState() {
    this._menu_data.toogleMenuState();
  }

  // Getting the correct icon class based on this.name from menu.service.
  icon() { 
    return this._menu_data.getIcon(this.name);
  }

  // Getting the correct icon class based on this.name from menu.service.
  path() {
    return this._menu_data.getPath(this.name);
  }
}
