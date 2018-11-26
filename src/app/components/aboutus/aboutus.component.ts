import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  aboutus;

  constructor() {
    this.aboutus=data['aboutus'];
   }

  ngOnInit() {
  }

}
