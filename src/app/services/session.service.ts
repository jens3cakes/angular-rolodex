import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService{
  user: {
    id:number,
    name: string,
    email:string,
    username:string,
    password: string,
    address: string,
    isLoggedIn: boolean
  } = {
    id: 1,
    name:'jennifer',
    email:'jhikichi001@gmail.com',
    username: 'jens3cakes',
    password:'password',
    address:'123 somewhere ave',
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
    this.user.name = user.name;
    this.user.email= user.email;
    this.user.username = user.username;
    this.user.password = user.password;
    this.user.address = user.address;
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