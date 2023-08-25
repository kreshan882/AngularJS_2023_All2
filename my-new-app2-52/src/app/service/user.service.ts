import { Injectable } from '@angular/core';
import {dataType} from '../interface_user';  // onlt can import from service
// interface dataType{
//   name:string,
//   id:number,
//   isSrilankan:boolean,
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData52(){
    const data_obj52:dataType={
      name:"kreshan",
      id:123,
      isSrilankan:true,   
    }
  }

}
