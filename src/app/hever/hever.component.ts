import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { HeverApiService  } from '../hever-api.service';


@Component({
  selector: 'app-hever',
  templateUrl: './hever.component.html',
  styleUrls: ['./hever.component.scss']
})
export class HeverComponent implements OnInit {
  number: string = '';
  amount:number;
  date = new Date();


  constructor(private _snackBar: MatSnackBar, private heverApi: HeverApiService ) { }
 

  ngOnInit() {
  }

  valid(){
    let numberValid =  (this.number!= '' && this.number != undefined && this.number.match(/\d/g).length===10);
    return numberValid;
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

    this.heverApi.createHeverRequest(this.number,this.amount,this.date).then((eventId) => {
      this.heverApi.getAllHeverRequests();

      
    })

  
  }

}
