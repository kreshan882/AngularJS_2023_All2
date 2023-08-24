import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';   // add global service to the project

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    //44 service
    user_service_data_list:any;
    constructor(private userdataK:UserdataService){
      console.warn(userdataK.user_service_data());
      this.user_service_data_list=userdataK.user_service_data()     
    }

    // //45 value from api
    // userdataK.user_service_data().subscribe((data)=>{
    //     console.warn('data',data);
    //     this.user_service_data_list=data;    
    // })
}
