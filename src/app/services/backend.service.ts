import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})

export class BackendService {
  baseUrl: string = "http://localhost:4200/";
  user: Object[] = []
  contacts: Object[]

  constructor(private http: HttpClient) {

  }

  getPeople() {
    return this.http.get(`${this.baseUrl}/people/4`).toPromise();
  }

  getContacts() {
    return this.contacts
  }

  login(user) {
    return Promise.resolve({
      id: user.id,
      username: user.username
    });
  }

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

  addToContact(contact) {
    return Promise.resolve({
      name: contact.name,
      email: contact.email,
      company: contact.company,
      address: contact.address,
      mobile: contact.mobile,
      home: contact.home,
      work: contact.work,
      twitter: contact.twitter,
      instagram: contact.instagram,
      github: contact.github
    })
  }

}


