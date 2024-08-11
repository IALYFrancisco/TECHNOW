import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  giveMessage():void {
    window.console.log("IALY Francisco Raymond from data service ;)")
  }

}
