import { Component } from '@angular/core';


@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent {
  
MemberList = [
  {
    name: 'Mohamed Aziz FEKIH',
    office: 'Président'
  },
  {
    name: 'Zeineb ATTIA',
    office: 'Vice Présidente'
  },
  {
    name: 'Yosr MERCHAOUI',
    office: 'Secrétaire Générale'
  },
  {
    name: 'Sarra DABBABI',
    office: 'Trésorière'
  },
  {
    name: 'Iheb KILANI',
    office: 'Résponsable communication'
  },
  {
    name: 'Yasmine BOUSSAID',
    office: 'Résponsable événementiel'
  },
  {
    name: 'Mohamed Aziz BIBI',
    office: 'Résponsable projets et pospection'
  },
  {
    name: 'Amani CHEBBI',
    office: 'Résponsable Ressources Humaines'
  },
  {
    name: 'Houyem AIDI',
    office: 'Responsable sponsoring et partenariats'
  }
];
verifDepartement1=false;
verifDepartement2=false;
verifDepartement3=false;
verifDepartement4=false;

 constructor (){
 }
 
/* onDepartement(i){
  switch(i) { 
    case 0: { 
      this.verifDepartement1=!this.verifDepartement1; 
      this.verifDepartement2=false; 
      this.verifDepartement3=false; 
      this.verifDepartement4=false; 
       break; 
    } 
    case 1: { 
      this.verifDepartement2=!this.verifDepartement2;
      this.verifDepartement1=false;
      this.verifDepartement3=false;
      this.verifDepartement4=false;
       break; 
    } 
    case 2: { 
      this.verifDepartement3=!this.verifDepartement3;
       break; 
    } 
    default: { 
      this.verifDepartement4=!this.verifDepartement4;
       break; 
    } 
  }   
 }*/
}