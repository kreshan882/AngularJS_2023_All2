import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { Comptutor60Component } from './comptutor60/comptutor60.component';
import { Comptutor21to40Component } from './comptutor21to40/comptutor21to40.component';

@NgModule({
  declarations: [
    AppComponent,
    Comptutor60Component,
    Comptutor21to40Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule   //add new UserAuthModule, to root module(AppModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
