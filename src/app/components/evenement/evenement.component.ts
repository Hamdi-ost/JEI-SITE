import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  mandatList = ['2013', '2014', '2015', '2016', '2017'];
  evenements ;

  constructor() {
    this.evenements = data['events'];
   }

  ngOnInit() {
  }

}
