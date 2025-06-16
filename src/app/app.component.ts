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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngOnDestroy(): void {
    
  }

}
