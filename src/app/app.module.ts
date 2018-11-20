import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouterModule } from "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
