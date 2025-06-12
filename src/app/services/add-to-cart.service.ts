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
      cart = JSON.parse(cart).push(project)
    }
  }

}
