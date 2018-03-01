import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  // Variable that indicates if the menu is open. Closed by default.
  private is_active: boolean = false;

  constructor() { }

  // Method that returns if the menu is open or not.
  isActive(): boolean{
    return this.is_active;
  }

  // Switch menu state variable.
  toogleMenuState() {
    this.is_active = !this.is_active;
    console.log(this.is_active);
  }

}
