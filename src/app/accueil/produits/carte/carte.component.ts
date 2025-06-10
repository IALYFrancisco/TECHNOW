import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  
  constructor( public connexion: UserIsConnectedService ) { }

  isConnected: boolean = this.connexion.userIsConnected()

  products:any = [
    {name: 'Boîtier noir', img_url:'../../../assets/PRODUIT/BOITIER/CAA-ANTNX420.jpg'},
    {name: 'Carte graphique', img_url:'../../../assets/PRODUIT/CARTE-GRAPHIQUE/51oHZsKzIvL.jpg'},
    {name: 'Carte mère', img_url:'../../../assets/PRODUIT/CARTE-MERE/R (4).jpg'},
    {name: 'Ram DDR4', img_url:'../../../assets/PRODUIT/MEMOIRE-VIVE/OIP (7).jpg'},
    {name: 'Boîtier blanc', img_url:'../../../assets/PRODUIT/BOITIER/LD0005954620.jpg'},
    {name: 'Processeur i5 10Gen', img_url:'../../../assets/PRODUIT/PROCESSEUR/OIP (3).jpg'},
  ];


  ngOnInit(): void {
  }

}