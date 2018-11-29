import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  title: string = 'Contact Page'
  //show: boolean = false;
  contacts: Object[] = [];

  constructor(private backend: BackendService) {
    this.contacts = this.backend.getContacts();
    console.log(this.backend.getContacts())

  }
}