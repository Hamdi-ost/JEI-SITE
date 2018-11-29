import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/contenu.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actualite-details',
  templateUrl: './actualite-details.component.html',
  styleUrls: ['./actualite-details.component.css']
})
export class ActualiteDetailsComponent {
  id;
  year;
  name1;
  name2;
  date;
  description1;
  description2;
  afterPoint;
  img;
  points;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.year = params['year']
      var actualite = data['GlobalActualite'].filter((a) => { return a.date == this.year; })[0].actualites
        .filter(
          (b) => {
            return b.id == this.id;
          }
        )[0]
      var name = actualite.name.split(' ')
      this.name2 = name[name.length - 1]
      this.name1 = name.slice(0, name.length - 1).join(' ')
      this.date = actualite.date
      this.description1 = actualite.description1
      this.description2 = actualite.description2
      this.img = actualite.images
      this.points = actualite.points
      this.afterPoint = actualite.afterPoint
    });

  }
}

