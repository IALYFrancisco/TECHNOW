import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminallproducts',
  templateUrl: './adminallproducts.component.html',
  styleUrls: ['./adminallproducts.component.css']
})
export class AdminallproductsComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/product/get').subscribe({
      next: response => console.log(response),
      error: () => console.log("Error fetching product list.")
    })
  }
}