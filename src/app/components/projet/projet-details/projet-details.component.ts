import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../assets/contenu.json';



@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.css']
})
export class ProjetDetailsComponent  implements OnInit {

  name ;
  client;
  date;
  sujet;
  url;
  contact;
  presentationEntreprise;
  presentationProjet;
  membreAffectees;
  logo;
  demo;
  temoignageClient;
  socialMedia;
  video;

  getDetails(id) {
    const details = data['projets'].filter(detail => {
      if (detail.id === Number(id)) {
        this.name = detail.name;
        this.date = detail.date;
        this.client = detail.client;
        this.sujet = detail.sujet;
        this.url = detail.url;
        this.contact = detail.contact;
        this.presentationEntreprise = detail.presentationEntreprise;
        this.presentationProjet = detail.presentationProjet;
        this.membreAffectees = detail.membreAffectees;
        this.logo = detail.logo;
        this.demo = detail.demo;
        this.temoignageClient = detail.temoignageClient;
        this.socialMedia = detail.socialMedia;
        this.video = detail.video;
      }
    });
  }
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
    this.getDetails(params['id']);
    });

  }

  ngOnInit() {
 }

}
