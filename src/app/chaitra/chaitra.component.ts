import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-chaitra',
  templateUrl: './chaitra.component.html',
  styleUrls: ['./chaitra.component.css']
})
export class ChaitraComponent implements OnInit  {
  message:string="I'm Read Only"
  canEdit=false
  constructor(){}
  ngOnInit(): void {
    
  }
  onEditClick(){
    this.canEdit=!this.canEdit
    if(this.canEdit){ this.message="Edit me";}
    else{this.message="Read Only"}
  }
}
