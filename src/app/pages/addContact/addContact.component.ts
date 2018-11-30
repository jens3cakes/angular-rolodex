import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.html']
})

export class AddContactComponent{
  addContactForm: {
    name: string,
    email: string,
    company: string,
    phoneNumber: number,
    address: string
  } = {
    name:"",
    email:"",
    company:"",
    address:"",
    phoneNumber:1
  }


  constructor(
    private router: Router,
    
  ){

  }
}