import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})

export class BackendService {
  baseUrl: string = 'https://swapi.co/api';

  contacts: Object[] = [
    {
      name: 'Jennifer Hikichi',
      email: 'jhikichi001@gmail.com',
      phone: '1-808-555-6666',
      company: 'My House',
      address: '1234 Somewhere Street Oahu,HI 56789'
    },
    {
      name: 'Bill Gates',
      email: 'bgates001@gmail.com',
      phone: '1-222-333-4444',
      company: 'Microsoft',
      address: '1234 Somewhere Ave Redmond, WA 56789'
    },
    {
      name: 'Steve Jobs',
      email: 'sjobs001@gmail.com',
      phone: '5-666-777-8888',
      company: 'Apple',
      address: '1234 El Camino Real Mountain View, CA 56789'
    }
  ];


  constructor(private http: HttpClient) {

  }

  getPeople() {
    return this.http.get(`${this.baseUrl}/people/4`).toPromise();
  }

  getContacts(){
    return this.contacts
  }

  login(user) {
    return Promise.resolve({
      id:user.id,
      username: user.username
    });
  }

  logout(){
    return Promise.resolve({});
  }

  register(){
    return Promise.resolve({});
  }
}


