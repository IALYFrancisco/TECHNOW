import { Component, OnInit } from '@angular/core';
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
    { img_url:'../../../assets/PRODUIT/BOITIER/CAA-ANTNX420.jpg', price: '600.000', categorie: 'UC', mark: 'Corsaire', model: 'Black Panthère'},
    { img_url:'../../../assets/PRODUIT/CARTE-GRAPHIQUE/51oHZsKzIvL.jpg', price: '5.000.000', categorie: 'GPU', mark: 'Nvidia', model: 'GTX'},
    { img_url:'../../../assets/PRODUIT/CARTE-MERE/R (4).jpg', price: '800.000', categorie: 'Carte mère', mark: 'Corsaire', model: 'Rost Ghost'},
    { img_url:'../../../assets/PRODUIT/MEMOIRE-VIVE/OIP (7).jpg', price: '400.000', categorie: 'RAM', mark: 'Water Coolin', model: 'RGB'},
    { img_url:'../../../assets/PRODUIT/BOITIER/LD0005954620.jpg', price: '800.000', categorie: 'UC', mark:'Corsaire', model: 'Angel'},
    { img_url:'../../../assets/PRODUIT/PROCESSEUR/OIP (3).jpg', price: '900.000', categorie: 'CPU', mark: 'Intel', model: 'Core i5'},
  ];


  ngOnInit(): void {
  }

}