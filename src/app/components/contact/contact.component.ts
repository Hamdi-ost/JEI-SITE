import {NgModule, Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from '@angular/fire/database';
import {FormsModule, NgForm} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private af: AngularFireDatabase) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    let formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    form.reset();
  }

}
