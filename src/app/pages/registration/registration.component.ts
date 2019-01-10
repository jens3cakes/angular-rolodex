import { Component } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from "@angular/router"
import { SessionService } from '../../services/session.service' 

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {

  regFormData: { first_name: string, last_name:string, email: string, username: string, password: string, cellphone_number: string, home_phone_number:string } =
    {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      cellphone_number: '',
      home_phone_number:''
    }

  constructor(
    private backend: BackendService,
    private router: Router,
    private session: SessionService
  ) { }

  submitRegForm(e) {
    e.preventDefault()
    // console.log(this.regFormData)
    return this.backend.register(this.regFormData)
    .then(()=> {
       return this.session.setSession(this.regFormData)
    })
      .then(() => {
        return this.router.navigate(['/'])
      })
      .then(() => {
        return this.backend.user.push(this.regFormData)
      })
  }


}