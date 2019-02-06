import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { BackendService } from '../../services/backend.service'
import { Router } from '@angular/router'


@Component({
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})

export class UserProfileComponent {
  user: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    cellphone_number: string,
    home_phone_number: string,
  } = {
    id: this.session.user.id,
    first_name: this.session.user.first_name,
    last_name: this.session.user.last_name,
    email: this.session.user.email,
    cellphone_number: this.session.user.cellphone_number,
    home_phone_number: this.session.user.home_phone_number
  }
  editButtonStatus = false;
  editUserForm: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    cellphone_number: string,
    home_phone_number: string
  } =
  {
    id: this.user.id,
    first_name: this.user.first_name,
    last_name: this.user.last_name,
    email: this.user.email,
    cellphone_number: this.user.cellphone_number,
    home_phone_number: this.user.home_phone_number,
  }


  constructor(
    private session: SessionService,
    private backend: BackendService,
    private router: Router
  ) {
    this.user = this.session.user
  }

  editButton() {
    return this.editButtonStatus = true;
  }

  editForm(){
    return this.backend.editProfileInfo(this.editUserForm)
    .then(()=>{
      return this.editButtonStatus=false
    })
    .then(()=>{
      return this.router.navigate(['/userProfile'])
    })
  }
  
}