import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient, public router: Router ) { }

  result:any

  request:boolean = false

  ngOnInit(): void {
  }

  newUser: any = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  Register():void{
    if(this.newUser.valid){
      this.http.post(`${environment.API_BASE_URL}/authentication/register`, this.newUser.value)
        .subscribe((response: any) => { 
          this.result = response;
          if(this.result.status == 201){
            this.router.navigate(['/authentication/login'])
          }
        })
    }
  }

}
