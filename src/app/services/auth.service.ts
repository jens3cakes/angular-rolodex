import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ){}

  loginCheck(user) {
    this.session.setSession(user);
    };
  

  logout() {
    return this.backend.logout()
    .then(() => {
      return this.session.clearSession();
    })
  }

  // register(){
  //   return this.backend.register()
  // }
}