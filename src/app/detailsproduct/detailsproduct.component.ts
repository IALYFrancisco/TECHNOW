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
    this.http.get(`${environment.API_BASE_URL}/product/get?_id=${this.activeRoute.snapshot.paramMap.get('_id')}`).subscribe({
      next: (response)=>{ console.log(response) }
    })
  }

}