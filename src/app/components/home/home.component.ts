import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  projets = [];
  evenements = [];
  actualites = [];
  sponsors = [];
  formations = [];

  constructor() {

  }

  ngOnInit() {
    this.projets.push(data['projets'][0], data['projets'][1], data['projets'][2], data['projets'][3]);
    this.evenements = data['events'];
    this.sponsors = data['sponsors'];
    this.actualites.push(data['GlobalActualite'][0], data['GlobalActualite'][1], data['GlobalActualite'][2]);
    this.formations.push(data['formations'][0], data['formations'][1], data['formations'][2]);
  }


}
