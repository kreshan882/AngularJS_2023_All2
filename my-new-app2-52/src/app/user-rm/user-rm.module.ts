import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRmRoutingModule } from './user-rm-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.warn("Lazy Load Test- user module loaded........................................");

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRmRoutingModule
  ]
})
export class UserRmModule { }
