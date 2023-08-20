import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { Comptutor60Component } from './comptutor60/comptutor60.component';
import { Comptutor21to40Component } from './comptutor21to40/comptutor21to40.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// auto install when ng bootstarp installes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // auto install when meterial UI installes
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; //manuwaly addedd (from web)
import {MatButtonModule} from '@angular/material/button'; //add Metterial button
@NgModule({
  declarations: [
    AppComponent,
    Comptutor60Component,
    Comptutor21to40Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // anguler form add get functions
    UserAuthModule,  //add new UserAuthModule, to root module(AppModule)
    NgbModule, BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule                  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
