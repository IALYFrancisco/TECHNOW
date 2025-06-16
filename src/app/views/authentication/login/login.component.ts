import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserIsConnectedService } from 'src/app/services/user-is-connected.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router, private connection: UserIsConnectedService) { }

  ngOnInit(): void {
  }

  user:any = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  Login():void{
    if(this.user.valid){
      this.http.post(`${environment.API_BASE_URL}/authentication/login`, this.user.value, { withCredentials: true, observe: 'response' })
        .subscribe((response:any) => { 
          if(response.status == 200){
            localStorage.setItem('accessToken', response.body.accessToken)
            localStorage.setItem('user', JSON.stringify(response.body.user))
            this.connection.isLoggedInSubject.next(true)
            this.router.navigate(['/'])
          }
         })
    }
  }

}
