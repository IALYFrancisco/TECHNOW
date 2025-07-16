import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

  AddProduct():void{
    if(this.newProducts.valid){
      window.alert("Posting product data.")
    }else{
      window.alert("Données invalides 🛑, remplissez tout les champs.")
    }
  }

}
