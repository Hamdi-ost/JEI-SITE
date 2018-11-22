import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets;

  constructor( ) {
    this.projets = data['projets'];
  }

  ngOnInit() {
 }

}
