import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {CONTACTS} from '../mock-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = CONTACTS;

  contact: Contact = {
    FirstName: "First",
    LastName: "Last",
    Photo: "User1",
    Hour: 12,
    Minute: 30,
    ChatHistory: "Hey buddy How are you today?"
  }
  constructor() { }

  ngOnInit() {
  }

}
