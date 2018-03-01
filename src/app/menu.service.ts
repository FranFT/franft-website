import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class MenuService {

  // Variable that indicates if the menu is open. Closed by default.
  private is_active: boolean = false;

  // Menu options.
  private options = new BehaviorSubject<any>(['home','contact']);
  option = this.options.asObservable();

  constructor() { }

  // Method that returns if the menu is open or not.
  isActive(){
    return this.is_active;
  }

  // Switch menu state variable.
  toogleMenuState() {
    this.is_active = !this.is_active;
  }

}
