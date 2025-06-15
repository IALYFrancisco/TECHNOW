import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  userIsConnected(): boolean {
    this.http.post(`${environment.API_BASE_URL}/authentication/token/verify`, null, { withCredentials: true, observe: 'response' })
      .subscribe((response) => { console.log(response) })
    return false
  }

}