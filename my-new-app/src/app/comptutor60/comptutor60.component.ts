import { Component } from '@angular/core';

@Component({
  selector: 'app-comptutor60',
  templateUrl: './comptutor60.component.html',
  styleUrls: ['./comptutor60.component.css']
})
export class Comptutor60Component {
  titleK = 'User Add Page in root';
  
  //interpolation & proporty binding test
  nameK="kreshanr";  
  isDisableK=false;

  displayVal:string='';
  cointerV=0;

  //click me button
  // type sctipt feature (must define type) name:any // name: string | number // tsconfig.ts--> "strict": true,
  getName(name:string){   
    alert("my name is "+name);
  }

  //2 get data list
  getData(name:string){   
    console.warn(name);
    this.displayVal=name;
  }

  //3 +1/-1 calculation (video 12)
  counterK(type:string){    
    type==='add'?this.cointerV++:this.cointerV--;
    
  }

  //15
  showK=false;

  //16
  colorK='blue';

  //18 attay & objects
  userArray=['kresh','dhar','kowsik'];

  userObject=[
    {name:'kresh',email:'kre@gmail.com',phone:'123'},
    {name:'dhar',email:'dhar@gmail.com',phone:'222'},
  ]

  //19 Nested Loop
  userList=[
    {name:'kresh',phone:'123',accounts:['facebook','ucsc','tebs']},
    {name:'dhar',phone:'222',accounts:['facebook','excel']},
  ]

//20 Style Binding & buttine click change color
    colorK2="orange";
    sizek="20px";
    updateColor(){
      this.colorK2="red";
      this.sizek="30px";
    }

}
