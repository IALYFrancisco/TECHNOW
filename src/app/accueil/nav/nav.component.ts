import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public connexion: UserIsConnectedService, private http: HttpClient, public router: Router, public Cart: AddToCartService) { }

  connected = this.connexion.isLoggedIn$

  cart_items:number = this.Cart.items()

  ngOnInit(): void {
  }

  LogOut():void{
    this.http.post(`${environment.API_BASE_URL}/authentication/logout`, {}, { withCredentials: true })
    .subscribe({
      next: () => this.connexion.isLoggedInSubject.next(false)
    })
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
  }

}
