import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  @Input() _toggled:any;

  addProductForm = new FormGroup({
    categorie: new FormControl('', [Validators.required]),
    mark: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  getProductObject():void {
    console.log(this.addProductForm.value)
  }

  ngOnInit(): void {
  }

}
