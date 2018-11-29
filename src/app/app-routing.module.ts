import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'header', component: HeaderComponent},
{ path: 'contacts', component: ContactsComponent},
{ path: '**', redirectTo: '', pathMatch: 'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
