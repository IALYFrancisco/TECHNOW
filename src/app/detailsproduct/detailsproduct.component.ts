import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute, private http: HttpClient ) { }

  product: any;

  ngOnInit(): void {
    this.http.get(`${environment}/product/get`, ).subscribe({
      next: (response)=>{}
    })
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
  }

}
