import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  RefreshToken(): void {
    this.http.post(`${environment.API_BASE_URL}/authentication/token`, null, { withCredentials: true, observe: 'response' })
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('accessToken', response.body?.accessToken)
        }
      })
  }

}