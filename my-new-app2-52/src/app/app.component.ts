import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core'; //deprecated
//import { UserService } from './service/user.service';   


// import {dataType} from './interface_user';
// interface dataType{
//   name:string,
//   id:number,
//   isSrilankan:boolean,
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app2-52';

  //52) Model & interface to validate data type
  //isSrilankan:"yes" need to be show error, when assine to dataType(typeScript feature)
  //ng g service service/user ----> interface can move to service
  //can move to new interface_user.ts file and export it
  // getData52(){
  //   const data_obj52:dataType={
  //     name:"kreshan",
  //     id:123,
  //     isSrilankan:true,   
  //   }
  // }

//53) Recap Module and Recap Routing
  /*
   ng g m users    ===> 1 file [module file]
   ng g c users/login
   ng g c users/list
  */

//54) Routing Module
  /*
  Routeing inside the single module
  ng g m admin --routing   ===> 2 file [module file + routing file]
  ng g c admin/login
  ng g c admin/list
  */

  //55) Group Routing Module
  /*
  ng g m user_rm --routing   ===> 2 file [module file + routing file]
  ng g c user-rm/login
  ng g c user-rm/list
  */

  //56 Lazy Loading Module

  //57 Lazy Loading Component
  /*
    ng g c boc
		ng g c ntb
  */
  constructor(
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver,
  ){}

  async loadBoc(){
    this.vcr.clear();
    const {BocComponent}= await import('./boc/boc.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(BocComponent)
    )
  }

  async loadNTB(){
    this.vcr.clear();
    const {NtbComponent}= await import('./ntb/ntb.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(NtbComponent)
    )
  }
}
