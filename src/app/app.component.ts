import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserIsConnectedService } from './services/user-is-connected.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'template-angular';

  private refreshSub?: Subscription

  constructor(private connexion: UserIsConnectedService){}

  connected = this.connexion.isLoggedIn$

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.connexion.refresh().subscribe({
      next: () => console.log("Session restaurée à l'ouverture."),
      error: () => console.log("Utilisateur non connecté.")
    })

    if(this.connected){

      this.refreshSub = interval(10 * 60 * 1000).subscribe(() => {
        this.connexion.refresh().subscribe({
          next: () => console.log("Access token mis à jour."),
          error: () => console.log("Echèc de mis à jour du token.")
        })
      })

    }

  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe()
  }

}
