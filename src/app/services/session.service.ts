import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService{
  user: {
    id:number,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    isLoggedIn: boolean
  } = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
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
    this.user.first_name = user.first_name;
    this.user.last_name = user.last_name
    this.user.email= user.email;
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

  getUser(user) {
    return this.user;
  }

}