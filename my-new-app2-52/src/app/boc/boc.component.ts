import { Component } from '@angular/core';

@Component({
  selector: 'app-boc',
  templateUrl: './boc.component.html',
  styleUrls: ['./boc.component.css']
})
export class BocComponent {
  constructor(){
    console.warn("boc component loaded from LL............................");
    
  }

  componentName="Test BOC"

  add(a:number,b:number){
    return a+b
  }
}
