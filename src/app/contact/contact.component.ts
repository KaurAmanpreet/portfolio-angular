import { Component, OnInit } from '@angular/core';
import { AddContactService } from '../services/add-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username: string = '';
  subject: string = '';
  email: string = '';
  message: string = '';
  error = "fade";
  success = "fade";
  constructor( private addcontactService: AddContactService) { }

  ngOnInit(): void {
  }

  addContact(){
    if(this.subject == '' && this.email == ''){
      this.error = 'show';
      this.success = "fade";
    }
    else{
      this.addcontactService.addContact(this.username, this.subject, this.email, this.message);
      this.success = "show";
      this.error = 'fade';
      }
  }

}
