import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: Object;

  constructor(
    private session: SessionService,
    private auth: AuthService,
    private router: Router
  ){
    this.user = this.session.getUser();
  }
  ngOnInit(){

  }

  login(){
    return this.router.navigate(['/login'])
  }

  isLoggedIn(){
    return this.session.getIsLoggedIn();
  }

  logout(){
    return this.auth.logout()
    .then(()=>{
      return this.router.navigate(['/login'])
    })
  }



}