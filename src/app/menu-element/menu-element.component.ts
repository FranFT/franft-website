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

  // Returns the icon used for a menu-element depending on
  // its name using for that 'selectIcon' method from menu service.
  icon() { 
    return this._menu_data.selectIcon(this.name);
  }
}
