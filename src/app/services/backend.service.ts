import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../services/session.service'
import { resetComponentState } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root',

})

export class BackendService {
  baseUrl: string = "http://localhost:4200/";
  user: Object[] = []
  contacts: Object[]

  constructor(
    private http: HttpClient, private session: SessionService) {
      
    }
     

  

  getPeople() {
    return this.http.get(`${this.baseUrl}/people/4`).toPromise();
  }

  getContacts() {
    return this.contacts
  }

  login(user) {
    const loginUrl = this.baseUrl + 'api/users/login'
    return this.http.post(loginUrl,{
      username: user.username,
      password: user.password
    })
    .toPromise()
    .then((resp)=>{
      return this.session.setSession(resp);
    })
  };

  logout() {
    return Promise.resolve({});
  }

  register(user) {
    console.log(user)
    const userUrl = this.baseUrl + 'api/users'
    console.log(userUrl)
    return this.http.post(userUrl,
      {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        username: user.username,
        password: user.password,
        cellphone_number: user.cellphone_number,
        home_phone_number: user.home_phone_number
      })
      .toPromise();


  };

  addToContact(contact, user) {
    console.log(user, contact)
    const contactUrl = this.baseUrl + 'api/contacts'
    return this.http.post(contactUrl, {
      user_id: user,
      first_name: contact.first_name,
      last_name: contact.last_name,
      personal_email: contact.personal_email,
      work_email: contact.work_email,
      company_name: contact.company_name,
      work_number: contact.work_number,
      work_number_extension: contact.work_number_extension,
      work_cell_number: contact.work_cell_number,
      work_street_address: contact.work_street_address,
      work_state_address: contact.work_state_address,
      work_country_address: contact.work_country_address,
      personal_cellphone_number: contact.personal_cellphone_number,
      home_phone_number: contact.home_phone_number,
      home_street_address: contact.home_street_address,
      home_state_address: contact.home_state_address,
      home_country_address: contact.home_country_address,
      type_of_business: contact.type_of_business,
      type_of_contact: contact.type_of_contact,
      notes: contact.notes,
    })
    .toPromise()
    .then((contact)=>{
    console.log(contact)
    })
    
  }
}


