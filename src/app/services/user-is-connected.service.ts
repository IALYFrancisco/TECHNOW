import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  result: boolean = false

  async userIsConnected(): Promise<boolean> {
    let at: any = localStorage.getItem('accessToken') || null
    await this.http.post(`${environment.API_BASE_URL}/authentication/token/verify`, { accessToken: at }, { withCredentials: true, observe: 'response' })
      .subscribe()
  }
}