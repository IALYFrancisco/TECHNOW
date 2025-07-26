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

  constructor(private http: HttpClient, private router: Router) {}

  newProducts = new FormGroup({
    category: new FormControl(null, [Validators.required]),
    mark: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    stock: new FormControl(null, [Validators.required]),
    unite_price: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    color: new FormControl('#000000', [Validators.required]), // valeur par défaut = noir
    description: new FormControl(null, [Validators.required])
  });

  btn_clicked: boolean = false;
  selectedFile: File | null = null;

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.newProducts.patchValue({ image: file });
      this.newProducts.get('image')?.updateValueAndValidity();
    }
  }

  ClickButton(): void {
    this.btn_clicked = true;
  }

  AddProduct(): void {
    if (this.newProducts.valid && this.selectedFile) {
      const formData = new FormData();

      formData.append('category', this.newProducts.get('category')!.value);
      formData.append('mark', this.newProducts.get('mark')!.value);
      formData.append('model', this.newProducts.get('model')!.value);
      formData.append('stock', this.newProducts.get('stock')!.value);
      formData.append('unite_price', this.newProducts.get('unite_price')!.value);
      formData.append('description', this.newProducts.get('description')!.value);
      formData.append('color', this.newProducts.get('color')!.value);
      formData.append('image', this.selectedFile); // fichier image

      this.http.post(`${environment.API_BASE_URL}/product/add`, formData).subscribe({
        next: () => this.router.navigate(['/backoffice']),
        error: (err) => console.log(err)
      });
    } else {
      console.warn("Formulaire invalide ou fichier manquant.");
    }
  }
}