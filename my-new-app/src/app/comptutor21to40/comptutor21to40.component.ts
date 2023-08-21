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

  //25 facebook post
  taskList:any[]=[];
  addTask(item:string){
    this.taskList.push({id:this.taskList.length,name:item});
    console.warn(this.taskList);
  }

  removeTask(id:number){
    this.taskList=this.taskList.filter(item=>item.id!=id);
    console.warn(this.taskList);
  }
  
  //26 pass the value parent to child component
  dataPass=10;

  updateChild(){
    this.dataPass=Math.floor(Math.random()*10);
  }

  //27 Reusable component , using child component

  userDetails=[
    {name:"kresh",age:"35"},
    {name:"dhar",age:"30"},
    {name:"kowsik",age:"4"}
  ]

  //28 pass the value child to Parent component
  data="x";
  updateData(item:string){
      console.warn(item);
      this.data=item;
  }

//29)  2 way BINDING
twoWayBindData:any;

//30)  Template Referance Variable
//getVal(data:HTMLInputElement){  ----> this type also can use
getVal(data:any){
    console.warn(data);
    alert (data);
}

}
