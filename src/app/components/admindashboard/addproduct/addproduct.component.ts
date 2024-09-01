import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  @Input() _toggled:any;
  
  ngOnInit(): void {
  }

}
