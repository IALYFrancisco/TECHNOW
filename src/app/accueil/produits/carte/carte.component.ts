import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  
  constructor( public connexion: UserIsConnectedService, private cart: AddToCartService ) { }

  products:any = [
    { _id: 0, img_url:'../../../assets/PRODUIT/BOITIER/CAA-ANTNX420.jpg', price: '600.000', categorie: 'UC', mark: 'Corsaire', model: 'Black Panthère'},
    { _id: 1, img_url:'../../../assets/PRODUIT/CARTE-GRAPHIQUE/51oHZsKzIvL.jpg', price: '5.000.000', categorie: 'GPU', mark: 'Nvidia', model: 'GTX'},
    { _id: 2, img_url:'../../../assets/PRODUIT/CARTE-MERE/R (4).jpg', price: '800.000', categorie: 'Carte mère', mark: 'Corsaire', model: 'Rost Ghost'},
    { _id: 3, img_url:'../../../assets/PRODUIT/MEMOIRE-VIVE/OIP (7).jpg', price: '400.000', categorie: 'RAM', mark: 'Water Coolin', model: 'RGB'},
    { _id: 4, img_url:'../../../assets/PRODUIT/BOITIER/LD0005954620.jpg', price: '800.000', categorie: 'UC', mark:'Corsaire', model: 'Angel'},
    { _id: 5, img_url:'../../../assets/PRODUIT/PROCESSEUR/OIP (3).jpg', price: '900.000', categorie: 'CPU', mark: 'Intel', model: 'Core i5'},
  ];


  ngOnInit(): void {
  }

  addToCart(project: any):void{
    if(true){
      this.cart.Add(project)
    }
  }

}