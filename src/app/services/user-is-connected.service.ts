import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserIsConnectedService {

  public isLoggedInSubject = new BehaviorSubject<boolean>(false)
  
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable()

  constructor( private http: HttpClient ) { }

  refresh(): Observable<any>{
    return this.http.post<{ accessToken: string }>(
      `${environment.API_BASE_URL}/authentication/token`,
      {},
      { withCredentials: true }
    ).pipe(
      tap((resposne) => { 
        localStorage.setItem('accessToken', resposne.accessToken)
        this.isLoggedInSubject.next(true)
       })
    )
  }

}