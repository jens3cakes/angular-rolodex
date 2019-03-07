import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  templateUrl: './editContact.component.html',
  styleUrls: ['./editContact.component.scss'],
})
export class EditContactComponent {
  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute,
    private contactServe: ContactService

  ) { }

  contact: {
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
    type_of_business_id: number,
    type_of_contact_id: number,
    notes: string
  } = {
      id: null,
      first_name: this.contactServe.contact.first_name,
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
      type_of_business_id: null,
      type_of_contact_id: null,
      notes: ""
    }
  editContactForm: {
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
    type_of_business_id: number,
    type_of_contact_id: number,
    notes: string
  } = {
      id: this.contact.id,
      first_name: this.contact.first_name,
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
      type_of_business_id: null,
      type_of_contact_id: null,
      notes: ""
    }

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id')
    console.log(contactId)
    this.backend.editContactInfo(contactId)
      .then((resp: any) => {
        // this.contact = resp;
        console.log(resp)
        return this.contact=resp
      })
  }

  editContactButton() {
    console.log(this.editContactForm, this.contact)
    return this.backend.editContact(this.editContactForm)
  }

}

