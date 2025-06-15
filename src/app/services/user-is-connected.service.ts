import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  async userIsConnected(): Promise<boolean> {
    let at: any = localStorage.getItem('accessToken') || null
    this.http.post(`${environment.API_BASE_URL}/authentication/token/verify`, { accessToken: at }, { withCredentials: true })
    let _user: any = localStorage.getItem('user') || null
    let user = JSON.parse(_user)
    if(user && at){
      return true
    }else{
      return false
    }
  }
}