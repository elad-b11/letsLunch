import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn():Boolean {
    return localStorage.getItem("userName") != null;
  }

  getUser():string {
    return localStorage.getItem("userName")
  }

  setUser(userName:string):void {
    localStorage.setItem("userName", userName)
  }

  disconnectUser():void {
    localStorage.removeItem("userName");
  }
}
