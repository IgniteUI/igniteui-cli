import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { NavMenuComponent } from './shared/nav-menu.component';
import { HomeComponent } from './home.component';
import { IgniteUIModule } from 'igniteui-angular-wrappers';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, IgniteUIModule, FormsModule],
  declarations: [
    HomeComponent,
    App,
    NavMenuComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {
}
