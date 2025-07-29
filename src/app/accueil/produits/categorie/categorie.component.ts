import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  colorOptionToggled: boolean = true
  priceOptionToggled: boolean = true
  GPUIcon:string = '../../../assets/ICON/icons8-video-card-color/icons8-video-card-48.png';
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
