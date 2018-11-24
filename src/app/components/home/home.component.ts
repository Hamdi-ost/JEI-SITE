import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  travaillonsSurList = ['l\'harmonie', 'l\'unité', 'l\'excellence', 'la qualité'];
  travaillonsSur;

  constructor() { }
=======

  projets = [];
  evenements = [];
  actualites = [];
  sponsors = [];
  formations = [];

  constructor() {

  }
>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01


  ngOnInit() {
<<<<<<< HEAD
    let i=0;
    const timerId = setInterval(() => this.travaillonsSur = this.travaillonsSurList[++i % this.travaillonsSurList.length], 1000);

=======
    this.projets.push(data['projets'][0], data['projets'][1], data['projets'][2], data['projets'][3]);
    this.evenements = data['events'];
    this.sponsors = data['sponsors'];
    this.actualites.push(data['GlobalActualite'][0], data['GlobalActualite'][1], data['GlobalActualite'][2]);
    this.formations.push(data['formations'][0], data['formations'][1], data['formations'][2]);
>>>>>>> 4c9238230ae0ac4f6ac7d3e36704c5bea89c8e01
  }


}


