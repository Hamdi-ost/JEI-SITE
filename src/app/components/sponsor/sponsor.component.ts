import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../../assets/contenu.json';



@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsors;
  partners;

  constructor() {
    this.sponsors = data['sponsors'];
    this.partners = data['partners'];
  }

  ngOnInit() {
  }

}
