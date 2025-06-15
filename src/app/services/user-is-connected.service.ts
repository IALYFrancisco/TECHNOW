import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  async userIsConnected(): Promise<boolean> {
    let accessToken: any = localStorage.getItem('accessToken') || null
    let _user: any = localStorage.getItem('user') || null
    let user = JSON.parse(_user)
    if(user && accessToken){
      return true
    }else{
      return false
    }
  }

}
