import { Component, OnInit } from '@angular/core';
import { UserIsConnectedService } from './services/user-is-connected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'template-angular';

  constructor(private connexion: UserIsConnectedService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.connexion.RefreshToken()

    setInterval( ()=>{
      this.connexion.RefreshToken()
    }, 13 * 60 * 1000)

  }

}
