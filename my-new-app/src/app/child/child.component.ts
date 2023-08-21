import { Component,Input,Output,EventEmitter} from '@angular/core'; 

//input: Input resived data from parent
//Outpot : Output,EventEmitter send data to parent

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  

  @Input() itemk=0;
  @Input() itemuser:{name:string,age:string}={name:'',age:''};

  @Output() updateDataEvent=new EventEmitter<string>();

}
