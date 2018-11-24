import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../../assets/contenu.json';
import * as $ from 'jquery';


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



  ngOnInit(){


  $(document).ready(function() {


    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    $('img').tooltip('disable');
  });

}

}
