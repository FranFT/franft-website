// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components //
// Core
import { AppComponent } from './app.component';
// Sections
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

// Menu
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
    MenuElementComponent,
    ContactComponent,
    ProjectsComponent
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
