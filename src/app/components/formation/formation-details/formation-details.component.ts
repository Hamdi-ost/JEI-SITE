import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/contenu.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent {

  name;
  gallery;
  date;
  temoignages;
  objectifs;
  category;
  sponsors;
  trainer;
  organizators;
  description;
  img;
  afterMovie;

  getDetails(id) {

    const details = data['formations'].filter(detail => {
      if (detail.id == id) {
        this.name = detail.name;
        this.temoignages = detail.temoignages;
        this.objectifs = detail.objectifs;
        this.trainer = detail.trainer;
        this.gallery = detail.gallery;
        this.date = detail.date;
        this.category = detail.category;
        this.sponsors = detail.sponsors;
        this.description = detail.description;
        this.organizators = detail.organizators;
        this.img = detail.img;
        this.afterMovie = detail.afterMovie;
      }
    });
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getDetails(params['id']);
    });

  }
}

