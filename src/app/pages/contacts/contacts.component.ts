import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  title: string = 'Contact Page'
  //show: boolean = false;
  contacts: Object[] = [];

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit(){
      let showContact = this.route.snapshot.paramMap.get('id');
      this.backend.getContacts(showContact)
      .then((resp:Object[])=>{
        this.contacts = resp
        console.log(resp)
        return this.contacts
      })
    }
}