import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service'


@Component({
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.html']
})

export class AddContactComponent {
  addContactForm: {
    name: string,
    email: string,
    company: string,
    address: string,
    mobile: string,
    home:string,
    work:string,
    twitter:string,
    instagram:string,
    github:string
  } = {
      name: "",
      email: "",
      company: "",
      address: "",
      mobile: "",
      home:"",
      work:"",
      twitter:"",
      instagram:"",
      github:""
    }


  constructor(
    private router: Router,
    private backend: BackendService
  ) {
  }
  addContact(e) {
    e.preventDefault()
    return this.backend.addToContact(this.addContactForm)
      .then(() => {
        this.backend.contacts.push(this.addContactForm)
      })
      .then(() => {
        this.router.navigate(['/contacts'])
      })
  }
}


