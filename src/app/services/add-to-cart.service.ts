import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() {
    var cartItems = localStorage.getItem('cart') || null
    this.cartItemsSubject.next(cartItems ? JSON.parse(cartItems) : []);
  }


  private cartItemsSubject = new BehaviorSubject<any[]>([])

  cartItems$ = this.cartItemsSubject.asObservable()

  cartItemsNumber$ = this.cartItems$.pipe(
    map(items => items.length)
  )
  
  Add(project:any):void {
    let currentCart = this.cartItemsSubject.getValue();
    let exists = currentCart.some((item:any) => item._id === project._id);
    if (!exists) {
    currentCart.push(project);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.cartItemsSubject.next(currentCart);
  }

}}
