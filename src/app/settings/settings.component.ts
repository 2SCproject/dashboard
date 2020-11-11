import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public val1 : boolean=true;
  public val2 : boolean=true;
  public val3 : boolean=true;
  public val4 : boolean=true;
  public val5 : boolean=true;
  public val6 : boolean=true;



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


  public editnumber(){
    if (this.val3==true){
      this.val3=false;
    }
  }

  public editmail(){
    if (this.val4==true){
      this.val4=false;
    }
  }

  public editfb(){
    if (this.val5==true){
      this.val5=false;
    }
  }

  public editadr(){
    if (this.val6==true){
      this.val6=false;
    }
  }

  public savenumber(){
    this.val3=true;
  }

  public savemail(){
    this.val4=true;
  }

  public savefb(){
    this.val5=true;
  }

  public saveadr(){
    this.val6=true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
