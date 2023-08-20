import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comptutor21to40',
  templateUrl: './comptutor21to40.component.html',
  styleUrls: ['./comptutor21to40.component.css']


})
export class Comptutor21to40Component {

  title="Form Submit k";

  //22 form submition 
  useData:any={};

  getData(data:NgForm){
    this.useData=data;
    console.warn(data);
  }

  // toggele
  isDisplay=true;
  toggle(){
    this.isDisplay=!this.isDisplay;
  }

  
}
