import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
  }

  user:any = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  Login():void{
    if(this.user.valid){
      this.http.post('http://localhost:3000/authentication/login', this.user.value, { withCredentials: true })
        .subscribe((response:any) => { 
          if(response.status == 200){
            localStorage.setItem('accessToken', response.accessToken)
            localStorage.setItem('user', JSON.stringify(response.user))
            this.router.navigate(['/'])
          }
         })
    }
  }

}
