import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  
  constructor() { }
  
  Add(project:any):void {
    let cart = localStorage.getItem('cart') || null
    if(!cart){
      localStorage.setItem('cart', JSON.stringify([project]))
    }else{
      let _cart = JSON.parse(cart)
      _cart.push(project)
      localStorage.setItem('cart', JSON.stringify(_cart))
    }
  }

}
