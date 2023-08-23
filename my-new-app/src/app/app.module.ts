import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { Comptutor00to20Component } from './comptutor00to20/comptutor00to20.component';
import { Comptutor21to40Component } from './comptutor21to40/comptutor21to40.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';  // add form modole for TEMPLATE-DRIVEN form
import { ReactiveFormsModule } from '@angular/forms';  // add form modolr from REACRIVE FORM
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// auto install when ng bootstarp installes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // auto install when meterial UI installes
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; //manuwaly addedd (from web)
import {MatButtonModule} from '@angular/material/button';//add Metterial button
import { ChildComponent } from './child/child.component';
import { Comptutor31to40Component } from './comptutor31to40/comptutor31to40.component';
import { UsdLkrPipe } from './pipes/usd-lkr.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    Comptutor00to20Component,
    Comptutor21to40Component,
    HeaderComponent,
    ChildComponent,
    Comptutor31to40Component,
    UsdLkrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // anguler form TEMPLATE-DRIVEN form
    ReactiveFormsModule, // anguler form REACRIVE FORM
    UserAuthModule,  //add new UserAuthModule, to root module(AppModule)
    NgbModule, BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule                  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
