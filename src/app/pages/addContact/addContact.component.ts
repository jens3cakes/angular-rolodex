import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from '../../services/backend.service'
import { SessionService } from '../../services/session.service'

@Component({
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.html']
})


export class AddContactComponent implements OnInit {

  ngOnInit(){
    // let userId = this.route.snapshot.paramMap.get('id')
    // console.log(userId)
    this.session.getUser()
    console.log(this.session.getUser())
  }

  addContactForm: {
    first_name: string,
    last_name: string,
    personal_email: string,
    work_email: string,
    company_name: string,
    work_number: string,
    work_number_extension: number,
    work_cell_number: string,
    work_street_address: string,
    work_state_address: string,
    work_country_address: string,
    personal_cellphone_number: string,
    home_phone_number: string,
    home_street_address:string,
    home_state_address: string,
    home_country_address: string,
    type_of_business: number,
    type_of_contact: number,
    notes:string,
  } = {
    first_name: "",
    last_name: "",
    personal_email: "",
    work_email: "",
    company_name: "",
    work_number: "",
    work_number_extension: null,
    work_cell_number: "",
    work_street_address: "",
    work_state_address: "",
    work_country_address: "",
    personal_cellphone_number: "",
    home_phone_number: "",
    home_street_address: "",
    home_state_address: "",
    home_country_address: "",
    type_of_business: null,
    type_of_contact: null,
    notes: "",
    }


  constructor(
    private router: Router,
    private backend: BackendService,
    private session: SessionService,
    private route: ActivatedRoute,

  ) {
  }

  addContact(e) {
    e.preventDefault()
    console.log(this.session.user.id)
    return this.backend.addToContact(this.addContactForm, this.session.user.id)
      .then(() => {
        this.router.navigate(['/contacts'])
      })
  }
}


