import { Directive ,ElementRef} from '@angular/core'; //ElementRef added

@Directive({
  selector: '[appRedEleK]'
})
export class RedEleKDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = "red";
  }

}
