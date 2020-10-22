import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactsService} from '../services/contact.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'edit-contact/:id', component: EditContactComponent},
  {path: 'new-contact', component: NewContactComponent},

  {path: '', redirectTo: '/about', pathMatch: 'full'}

  ];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
