// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuComponent } from './menu/menu.component';
import { MenuElementComponent } from './menu-element/menu-element.component';

// Services
import { MenuService } from './menu.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuButtonComponent,
    MenuComponent,
    MenuElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
