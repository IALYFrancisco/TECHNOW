import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  colorOptionToggled: boolean = true
  priceOptionToggled: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  colorToggle(): void {
    this.colorOptionToggled = !this.colorOptionToggled
  }

  priceToggle():void {
    this.priceOptionToggled = !this.priceOptionToggled
  }

}
