import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service'
@Component({
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})

export class UserProfileComponent {
user:Object


  constructor(
    private session: SessionService,
  ) {
         this.user = this.session.user
  }

  
  getUserProfile() {
    if (this.session.getIsLoggedIn())
      console.log(this.session.user)
    return this.session.user
  }

}