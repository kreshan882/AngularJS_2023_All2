import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent   // after add this expoers we can use this outside if the module
  ]
})
export class UserAuthModule { }
