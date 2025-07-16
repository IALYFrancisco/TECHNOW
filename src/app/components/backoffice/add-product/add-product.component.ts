import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  newProducts = new FormGroup({
    category: new FormControl(null, [Validators.required]),
    mark: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    stock: new FormControl(null, [Validators.required]),
    unite_price: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    color: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })

  btn_clicked: boolean = false

  ngOnInit(): void {
  }

  ClickButton():void{
    this.btn_clicked = true
  }

  AddProduct():void{
    if(this.newProducts.valid){
      this.http.post(`${environment.API_BASE_URL}/product/add`, this.newProducts.value).subscribe({
        next: () => {
          this.router.navigate(['/backoffice'])
        },
        error: (err) => { console.log(err) }
      })
    }else{
      // window.alert("Données invalides 🛑, remplissez tout les champs.")
    }
  }

}
