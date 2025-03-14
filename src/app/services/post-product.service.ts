import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostProductService {

  constructor( public http : HttpClient ) { }

  post_URI: string = "http://127.0.0.1:3000/product"

  postProduct(data_to_post:any):any {
    return this.http.post(this.post_URI, data_to_post)
  }

}
