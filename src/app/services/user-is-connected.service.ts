import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  constructor( private http: HttpClient ) { }

  refresh(): Observable<any>{
    return this.http.post<{ accessToken: string }>(
      `${environment}/authentication/token`,
      {},
      { withCredentials: true }
    ).pipe(
      tap((resposne) => { 
        localStorage.setItem('accessToken', resposne.accessToken)
       })
    )
  }

}