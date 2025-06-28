import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public connexion: UserIsConnectedService, private http: HttpClient, public router: Router) { }

  connected = this.connexion.isLoggedIn$

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
