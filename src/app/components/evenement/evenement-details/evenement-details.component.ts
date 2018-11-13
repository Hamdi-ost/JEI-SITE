import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/contenu.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent {

  name;
  speakers;
  schedule;
  gallery;
  sponsors;
  organizators;
  description;
  img2;

  getDetails(id) {

    const details = data['events'].filter(detail => {
       if (detail.id === Number(id)) {
        this.name = detail.name;
        this.speakers = detail.speakers;
        this.schedule = detail.schedule;
        this.gallery = detail.gallery;
        this.sponsors = detail.sponsors;
        this.description = detail.description;
        this.organizators = detail.organizators;
        this.img2 = detail.img2;
      }
     });
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getDetails(params['id']);
    });

  }
}

