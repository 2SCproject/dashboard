import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public val : boolean=true;

  public onmouseover(){
    if (this.val==true){
      this.val=false;
    }
  }

  public onmouseout(){
    if (this.val==false){
      this.val=true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
