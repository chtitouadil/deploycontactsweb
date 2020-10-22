import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ContactsService} from '../../services/contact.service';
import {newArray} from '@angular/compiler/src/util';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';




@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motCle: string = "";
  curentPage: number = 0;
  size: number = 5;
  pages: any;

  constructor(private http: HttpClient, public contactsService: ContactsService,
              public router: Router) {
  }


  ngOnInit(): void {


  }

  doSearch() {
    this.contactsService.getContacts(this.motCle, this.curentPage, this.size)
      .subscribe((data: any) => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);

      }, err => {
        console.log(err);
      })

  }

  chercher() {
    this.doSearch();

  }

  gotoPage(i: number) {
    this.curentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }

  onDeleteContact(c:Contact) {
    let confirm=window.confirm('Etes-vous sûr de vouloire supprimer '+c.nom+" "+c.prenom);
    if(confirm==true){
      this.contactsService.deleteContact(c.id)
        .subscribe((data: any) => {
          alert("Suppression effectuée");
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c),1
          )

        }, err => {
          console.log(err);
        })
    }


  }
}
