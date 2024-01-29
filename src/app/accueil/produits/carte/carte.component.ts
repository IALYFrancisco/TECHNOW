import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  @Output() emetteur1 = new EventEmitter<number>();

  counter1:number = 0;

  declencheur() {
    this.counter1 = this.counter1 + 1;
    this.emetteur1.emit(this.counter1);
  }

  monImage1:string = '../../../assets/PRODUIT/BOITIER/CAA-ANTNX420.jpg.776x1552_q85_upscale.jpg';
  monImage2:string = '../../../assets/PRODUIT/CARTE-GRAPHIQUE/51oHZsKzIvL.jpg';
  monImage3:string = '../../../assets/PRODUIT/CARTE-MERE/R (4).jpg';
  monImage4:string = '../../../assets/PRODUIT/MEMOIRE-VIVE/OIP (7).jpg';
  monImage5:string = '../../../assets/PRODUIT/BOITIER/LD0005954620.jpg';
  monImage6:string = '../../../assets/PRODUIT/PROCESSEUR/OIP (3).jpg';

  adore:string = '../../../assets/ICON/calendar_64px.png';

  constructor() { }

  ngOnInit(): void {
  }

}
