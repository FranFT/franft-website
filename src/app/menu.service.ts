import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class MenuService {

  // Variable that indicates if the menu is open. Closed by default.
  private is_active: boolean = false;

  // Menu options.
  private options = new BehaviorSubject<any>(['home', 'contact', 'projects']);
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

  // Used by components through dependency injection.
  getIcon(name) {
    // Setting menu element icon depending on its name.
    switch(name){
      case 'home': {
        return 'fas fa-home';
      }
      case 'contact':{
        return 'fas fa-user';
      }
      case 'projects':{
        return 'fas fa-code-branch';
      }
      default: {
        return 'fas fa-exclamation-triangle';
      }
    }
  }

  // Used by components through dependency injection.
  getPath(name) {
    // Setting menu element path depending on its name.
    if(name == 'home') {
      return '';
    }
    else {
      return name;
    }
  }

}
