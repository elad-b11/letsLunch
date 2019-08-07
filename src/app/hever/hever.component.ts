import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hever',
  templateUrl: './hever.component.html',
  styleUrls: ['./hever.component.scss']
})
export class HeverComponent implements OnInit {
  name: string = '';
  number: string = '';


  constructor(private _snackBar: MatSnackBar) { }
  date = new FormControl(new Date());

  ngOnInit() {
  }

  valid(){
    let nameValid =  (this.name!= '' && this.name != undefined);
    let numberValid =  (this.number!= '' && this.number != undefined && this.number.match(/\d/g).length===10);
    return nameValid && numberValid;
  }

  sendHeverAsk(){
    if(this.valid())
    {
      this._snackBar.open("בקשה נשלחה", "OK", {
        duration: 3000,
      });
    }
    else{
      this._snackBar.open("בקשה לא נשלחה", "ERROR", {
        duration: 3000,
      });
    }
  
  }

}
