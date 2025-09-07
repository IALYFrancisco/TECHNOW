import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private cart: AddToCartService ) { }

  apiBaseUrl = environment.API_BASE_URL

  cart$ = this.cart.cartItems$

  total_price:number = 0

  ngOnInit(): void {
    this.cart$.subscribe({
      next: (products:any)=> {
        products.forEach((product:any)=>{
          this.total_price = this.total_price + product.unite_price
        })
      }
    })
  }

}
