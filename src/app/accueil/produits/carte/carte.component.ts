import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  
  constructor( public connexion: UserIsConnectedService, private cart: AddToCartService, private http: HttpClient ) { }

  connected = this.connexion.isLoggedIn$

  products:any

  apiBaseUrl = environment.API_BASE_URL

  ngOnInit(): void {
    this.http.get(`${this.apiBaseUrl}/product/get`)
    .subscribe({
      next: (data) => {
        this.products = data
      },
      error: () => {
        console.log("Error fetching product list.")
      }
    })
  }

  addToCart(project: any):void{
    if(true){
      this.cart.Add(project)
    }
  }

}