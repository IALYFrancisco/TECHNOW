import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public connexion: UserIsConnectedService, private http: HttpClient, public router: Router) { }

  isConnected = this.connexion.userIsConnected()

  ngOnInit(): void {
  }

  LogOut():void{
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    this.http.post('http://localhost:3000/authentication/logout', {}, { withCredentials: true })
      .subscribe()
  }

}
