import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService{
  user: {
    id:number,
    username:string,
    isLoggedIn: boolean
  } = {
    id: undefined,
    username: '',
    isLoggedIn: false
  };

  constructor(){
    const userData = localStorage.getItem('user');
    if(userData) {
      try { this.user = JSON.parse(userData);}
      catch(err) {console.log(err)}
    }
  }

  setSession(user) {
    this.user.id = user.id;
    this.user.username = user.username;
    this.user.isLoggedIn = true;

    localStorage.setItem('user', JSON.stringify(this.user));
  }

  clearSession(){
    this.user.id = undefined,
    this.user.username = '',
    this.user.isLoggedIn = false;

    localStorage.removeItem('user');
  }
  getIsLoggedIn(){
    return this.user.isLoggedIn;
  }

  getUser() {
    return this.user;
  }

}