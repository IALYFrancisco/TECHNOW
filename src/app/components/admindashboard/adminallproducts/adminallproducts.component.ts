import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminallproducts',
  templateUrl: './adminallproducts.component.html',
  styleUrls: ['./adminallproducts.component.css']
})
export class AdminallproductsComponent implements OnInit {

  constructor( private http: HttpClient ) { }
  products:any
  requestIsDone: boolean = false
  ngOnInit(): void {
    this.http.get(`${environment.API_BASE_URL}/product/get`).subscribe({
      next: (response) => {
        this.products = response
        this.requestIsDone = true
      },
      error: () => console.log("Error fetching product list.")
    })
  }
}