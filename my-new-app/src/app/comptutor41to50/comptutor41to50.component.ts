import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';   // add global service to the project

@Component({
  selector: 'app-comptutor41to50',
  templateUrl: './comptutor41to50.component.html',
  styleUrls: ['./comptutor41to50.component.css']
})
export class Comptutor41to50Component {

  //41 404 no page issue/ wild card
  //ng g c no-page404

  //42- chile routing

  //43) Services (need duplicate memberData , if not use service)
  memberData=[
    {name:'kowsik',email:'kowsik@gmail.com'},
    {name:'dhatanik',email:'dharanik@gmail.com'},
  ]


  //44 service ( same user_service_data_list) data can use multo component)
  user_service_data_list:any;
  constructor(private userdataK:UserdataService){
    //44 hard code service value
    console.warn(userdataK.user_service_data());
    this.user_service_data_list=userdataK.user_service_data();

    // //45 value from api
    // userdataK.user_service_data().subscribe((data)=>{
    //     console.warn('data',data);
    //     this.user_service_data_list=data;    
    // })

  }

   //45 Call API from Services 
  getUserFormData(data:any){
    this.userdataK.saveUser(data).subscribe((result)=>{
        console.warn(result);
        
    });
  }

}
