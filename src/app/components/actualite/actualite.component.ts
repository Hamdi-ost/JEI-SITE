import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
  id;
  date;
  actualites;

  constructor(private route: ActivatedRoute) {
    this.actualites = data['GlobalActualite'];
    let compteur = 0;
    let compteurAnnee = 0;
    this.actualites.map(
      (a) => {
        compteurAnnee++;
        a.buttonColorIndice = compteurAnnee % 2 ? 1 : 2;
        a.backgroundColor = compteurAnnee % 2 ? 'danger' : 'info';
        a.color = compteurAnnee % 2 ? 'titlebrown' : 'titleblue';
        a.actualites.map(
          (b) => {
            compteur++;
            b.class = compteur % 2 ? '' : 'timeline-inverted';
            return b;
          }
        );
        return a;
      });
  }

}
