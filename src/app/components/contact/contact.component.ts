import { NgModule, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name;
  email;
  subject;
  university;

  lat = 36.843108;
  lng = 10.196867;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    const formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    form.reset();
  }


}
