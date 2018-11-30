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

  loginFormData: { name: string, email: string, password: string } = {
    name: '',
    email: '',
    password: ''
  }

  submitLoginForm() {
    return this.router.navigate(["/"])
  }


  title: string = 'Home Page/Login';

  characters: string[] = []
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
  return this.auth.login(this.loginFormData)
  .then(() => {
    return this.router.navigate(['/'])
  })
}

}