import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  cartItems: any = localStorage.getItem('cart') || null

  public cartItemsSubject = new BehaviorSubject<any>([])

  cartItems$: Observable<any> = this.cartItemsSubject.asObservable()

  cartItemsNumber$ = new Observable((observer:any)=>{
    if(this.cartItems){
      this.cartItemsSubject.next(JSON.parse(this.cartItems))
    }else{
      this.cartItemsSubject.next([])
    }
    this.cartItems$.subscribe({
      next: (items:any)=>{
        observer.next(items.length)
      }
    })
    observer.complete()
  })
  
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
