import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from '../../services/auth.service';
import { BackendService } from '../../services/backend.service'
import { Router } from '@angular/router';


@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: Object;
  search: string;
  filter: Object[];

  constructor(
    private session: SessionService,
    private auth: AuthService,
    private router: Router,
    private backend:BackendService
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
      this.session.clearSession()
    })
    .then(()=>{
      return this.router.navigate(['/login'])
    })
  }
  // contactSearch(){
  //   if(this.search.toLowerCase)
  //   this.filter = this.backend.contacts.filter((element)=>{
  //     console.log(element)
  //     return element.name.includes(this.search)
  //   })
          
  //};
  

}