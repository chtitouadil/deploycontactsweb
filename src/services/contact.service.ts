
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{
  constructor(public  http:HttpClient) {
  }
  getContacts(motCle:string,page:number,size:number){

    return this.http.get("http://localhost:8989/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
      .pipe(map(resp=>resp));

  }

  getContact(id:number){

    return this.http.get("http://localhost:8989/contacts/"+id)
      .pipe(map(resp=>resp));

  }

  saveContact(contact:Contact){

    return this.http.post("http://localhost:8989/contacts",contact)
      .pipe(map(resp=>resp));

  }

  updateContact(contact:Contact){

    return this.http.put("http://localhost:8989/contacts/"+contact.id,contact)
      .pipe(map(resp=>resp));

  }

  deleteContact(id:number){

    return this.http.delete("http://localhost:8989/contacts/"+id)
      .pipe(map(resp=>resp));

  }

}
