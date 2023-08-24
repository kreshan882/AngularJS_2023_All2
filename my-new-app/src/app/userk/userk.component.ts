import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userk',
  templateUrl: './userk.component.html',
  styleUrls: ['./userk.component.css']
})
export class UserkComponent implements OnInit{
  idk:string | null=null;
  constructor(private route:ActivatedRoute){ // new 

  }
  ngOnInit(): void {
    console.warn("user id is :" + this.route.snapshot.paramMap.get('idk'));
    this.idk= this.route.snapshot.paramMap.get('idk');
    
  }
}
