import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'

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
    console.log('form data: ', this.loginFormData)
  }


  title: string = 'Home Page/Login';

  characters: string[] = []
  show: boolean = false;
  contacts: object;


  constructor(private backend: BackendService) {

    this.backend.getContacts()


  }
  //methods go here



}