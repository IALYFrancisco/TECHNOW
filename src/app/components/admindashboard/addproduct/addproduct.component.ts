import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostProductService } from 'src/app/services/post-product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor( public post : PostProductService ) { }

  @Input() _toggled:any;

  addProductForm = new FormGroup({
    categorie: new FormControl('', [Validators.required]),
    mark: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    color: new FormControl('#000000', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    image_file_url: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  postMethod(){
    if(this.addProductForm.valid){
      this.post.postProduct(this.addProductForm.value)
      .subscribe((response:any)=>{
        console.log(response)
      })
    }
  }

  ngOnInit(): void {
  }

}
