import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {



  //44 get hard code value
  //constructor() { }
  user_service_data(){
    return [
      {name:'kowsik',email:'kowsik@gmail.com'},
      {name:'dhatanik',email:'dharanik@gmail.com'},
    ];
  }

// //45get from API
// url="https://randomuser.me/api";
// constructor(private http:HttpClient) { }
// user_service_data(){
//   return this.http.get(this.url);
// }


//46 post to API
url_post="https://randomuser.me/api";
constructor(private http:HttpClient) { }
saveUser(data:any) { 
  return this.http.post(this.url_post,data);
}

}
