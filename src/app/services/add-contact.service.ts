import { Injectable } from "@angular/core";
import { Contact } from "./contact";

@Injectable({providedIn:"root"})

export class AddContactService{
  contacts: Contact[] = [];

  addContact(username: string, subject: string, email: string, message: string){
    this.contacts.push({
      username: username,
      subject: subject,
      email: email,
      message: message
    })
    console.log("contact testing");
    console.log(this.contacts);
  }
}