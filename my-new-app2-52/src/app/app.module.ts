import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

// //Lazy Loading remove this component
// import { BocComponent } from './boc/boc.component';
// import { NtbComponent } from './ntb/ntb.component';
//Lazy Loading remove this module
//import { AdminModule } from './admin/admin.module';
//import { UserRmModule } from './user-rm/user-rm.module';

@NgModule({
  declarations: [
    AppComponent,
    //BocComponent,
    //NtbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,   // import user [MODULE] manuwaly
  /*LAZY LOADING(handel in app-routing.module.ts, can remove hear) */
  //  AdminModule,   // import admin [ROUTING MODULE], 
  //  UserRmModule,   // import admin [ROUTING MODULE]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
