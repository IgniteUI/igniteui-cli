import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxButtonModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
    IgxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
