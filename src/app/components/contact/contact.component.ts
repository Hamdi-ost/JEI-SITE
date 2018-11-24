<<<<<<< HEAD
import {NgModule, Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from '@angular/fire/database';
import {FormsModule, NgForm} from '@angular/forms';
=======
import { NgModule, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

<<<<<<< HEAD
  constructor(private af: AngularFireDatabase) {}
=======
  name;
  email;
  subject;
  university;

  lat = 36.843108;
  lng = 10.196867;

  constructor(private af: AngularFireDatabase) { }
>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01

  ngOnInit() {
  }

<<<<<<< HEAD
  onSubmit(form: NgForm){
=======
  onSubmit(form: NgForm) {
>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

<<<<<<< HEAD
    let formRequest = { name, email, subject, message};
=======
    const formRequest = { name, email, subject, message};
>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01
    this.af.list('/messages').push(formRequest);
    form.reset();
  }

<<<<<<< HEAD
=======

>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01
}
