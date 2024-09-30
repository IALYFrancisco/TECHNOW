import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adminallproducts',
  templateUrl: './adminallproducts.component.html',
  styleUrls: ['./adminallproducts.component.css']
})
export class AdminallproductsComponent implements OnInit {

  constructor() { }

  @Output() toggled:boolean = true

  ngOnInit(): void {
  }

  addProduct():void {
    this.toggled = !this.toggled
  }

}
