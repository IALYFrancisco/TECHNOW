import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

  newUser: any = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  Register():void{

    let _response

    if(this.newUser.valid){
      this.http.post('http://localhost:3000/authentication/register', this.newUser.value)
        .subscribe((_response: any) => { console.log(_response) })
    }
  }

}
