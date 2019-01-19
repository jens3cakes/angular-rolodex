import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router } from "@angular/router";
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log('OnInit has fired');
  };

  loginFormData: { username: string, password: string } = {
    username: '',
    password: ''
  }

  submitLoginForm() {
    return this.router.navigate(["/"])
  }


  title: string = 'Home Page/Login';

  show: boolean = false;
  contacts: object;

  constructor(
    private backend: BackendService,
    private router: Router,
    private session: SessionService,
    private auth: AuthService) {

    this.backend.getContacts()


  }
  //methods go here

login(){
  console.log(this.loginFormData)
  return this.backend.login(this.loginFormData)
  .then(()=>{
    this.session.getUser(this.loginFormData)
  })
  .then(() => {
    return this.router.navigate(['/'])
  })
  
}

}