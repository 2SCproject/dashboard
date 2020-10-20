import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public val1 : boolean=true;
  public val2 : boolean=true;



  public edittitle(){
    if (this.val1==true){
      this.val1=false;
    }
  }
  public savetitle(){
    this.val1=true;
  }

  public editdescription(){
    if (this.val2==true){
      this.val2=false;
    }
  }
  public savedescription(){
    this.val2=true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
