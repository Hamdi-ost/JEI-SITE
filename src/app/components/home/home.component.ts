import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  travaillonsSurList = ['l\'harmonie', 'l\'unité', 'l\'excellence', 'la qualité'];
  travaillonsSur;

  constructor() { }


  ngOnInit() {
    let i=0;
    const timerId = setInterval(() => this.travaillonsSur = this.travaillonsSurList[++i % this.travaillonsSurList.length], 1000);

  }

}


