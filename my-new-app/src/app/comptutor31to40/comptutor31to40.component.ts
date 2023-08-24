import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  // template form
import {FormGroup,FormControl,Validators,FormControlName} from '@angular/forms';  // reactive form 

@Component({
  selector: 'app-comptutor31to40',
  templateUrl: './comptutor31to40.component.html',
  styleUrls: ['./comptutor31to40.component.css']
})
export class Comptutor31to40Component {

  //31 type script [number|string|boolean|any| define TypeOf Obkect & array]
  data31:string|number='';
  obj31:{name:string,phn:number}={name:'',phn:0};
  arr31:number[]=[1,2,3];
  getData(){
    this.data31=22;  // now can allowed number and string
    //this.data31=false; // give error

    this.obj31={name:'kreshan',phn:123}; // array trpe must be string and number
    this.arr31=[1,5]; // only arrany is number
  }

  //32/33 PIPES
  value32='My Name Is Kreshan';
  date32=Date();

  jsonObj33={
    name:"kresh",age:35
  };

  //34 Customes Pipes
  //ng g p pipes/usdLkr   [usd-lkr]

  //35 & 36 TEMPLATE FORM / validation - done
  loginUser(item:NgForm){
      console.warn(item.value);
  }

  //37-3 REACTIVE FORM / validation ????
  loginFormRF=new FormGroup({
     user: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
     passwordRF: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })

  loginUserRF(){
    console.warn(this.loginFormRF.value); 
  }

  get user(){
    return this.loginFormRF.get('user');
  }

  get passwordRF(){
    return this.loginFormRF.get('passwordRF');
  }

  //38 (derivatived ngIf|ngFor |UserDefin (appRedEleK)) - done

  //39 Basic routing (header form)
  //40 Dinamic routing (update page loading with different user)
        // check in header (ckick out then click kowsik & Dharanik)
}
