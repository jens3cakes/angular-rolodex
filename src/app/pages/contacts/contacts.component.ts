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
  contacts: Object[]=[];

  contact:{
    id: number,
    first_name: string,
    last_name: string,
    personal_email: string,
    personal_cellphone_number: string,
    home_phone_number: string,
    home_street_address: string,
    home_state_address: string,
    home_country_address: string,
    company_name: string,
    work_email: string,
    work_number: string,
    work_number_extension: string,
    work_cell_number: string,
    work_street_address: string,
    work_state_address: string,
    work_country_address: string,
    type_of_business: number,
    type_of_contact: number,
    notes: string
  } = {
    id: null,
    first_name: "",
    last_name: "",
    personal_email: "",
    personal_cellphone_number: "",
    home_phone_number: "",
    home_street_address: "",
    home_state_address: "",
    home_country_address: "",
    company_name: "",
    work_email: "",
    work_number: "",
    work_number_extension: "",
    work_cell_number: "",
    work_street_address: "",
    work_state_address: "",
    work_country_address: "",
    type_of_business: null,
    type_of_contact: null,
    notes: ""
  }
  
  editContactForm:{
    id: number,
    first_name: string,
    last_name: string,
    personal_email: string,
    personal_cellphone_number: string,
    home_phone_number: string,
    home_street_address: string,
    home_state_address: string,
    home_country_address: string,
    company_name: string,
    work_email: string,
    work_number: string,
    work_number_extension: string,
    work_cell_number: string,
    work_street_address: string,
    work_state_address: string,
    work_country_address: string,
    type_of_business: number,
    type_of_contact: number,
    notes: string
  } = {
    id: this.contact.id,
    first_name: "",
    last_name: this.contact.last_name,
    personal_email: this.contact.personal_email,
    personal_cellphone_number: this.contact.personal_cellphone_number,
    home_phone_number: this.contact.home_phone_number,
    home_street_address: this.contact.home_street_address,
    home_state_address: this.contact.home_state_address,
    home_country_address: this.contact.home_country_address,
    company_name: this.contact.company_name,
    work_email: this.contact.work_email,
    work_number: this.contact.work_number,
    work_number_extension: this.contact.work_number_extension,
    work_cell_number: this.contact.work_cell_number,
    work_street_address: this.contact.work_street_address,
    work_state_address: this.contact.work_state_address,
    work_country_address: this.contact.work_country_address,
    type_of_business: this.contact.type_of_business,
    type_of_contact: this.contact.type_of_contact,
    notes: this.contact.notes
  }




  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let showContact = this.route.snapshot.paramMap.get('id');
    this.backend.getContacts(showContact)
      .then((resp: Object[]) => {
        this.contacts = resp
        console.log(resp)
        return this.contacts
      })
  }

  editButtonPushed(contact) {
    console.log(contact)
    this.router.navigate([`/editContact/${contact.id}`])
    return contact;
  }

  
}