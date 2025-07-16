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

  ngOnInit(): void {
  }

  formIsNotValid:any
  formIsValid:any

  newUser: any = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  Register():void{
    if(this.newUser.valid){
      this.formIsValid = true
      this.formIsNotValid = false
      this.http.post(`${environment.API_BASE_URL}/authentication/register`, this.newUser.value, { observe: 'response' })
        .subscribe(
        {
          next: (response) => {
            if(response.status == 201){
              this.router.navigate(['/authentication/login'])
            }
          },
          error: (err) => {
            this.formIsValid = false
            console.log(err)
          }
        }
      )
    }else{
      this.formIsNotValid = true
    }
  }

}
