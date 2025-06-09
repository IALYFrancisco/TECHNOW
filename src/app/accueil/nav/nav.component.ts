import { Component, OnInit } from '@angular/core';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public connexion: UserIsConnectedService) { }

  isConnected = this.connexion.userIsConnected()

  ngOnInit(): void {
  }

}
