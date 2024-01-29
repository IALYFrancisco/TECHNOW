import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  boitierIcon:string = '../../../assets/ICON/icons8-enclosure-for-servers-windows-11-color/icons8-enclosure-for-servers-48.png';
  carteMereIcon:string = '../../../assets/ICON/icons8-motherboard-color/icons8-motherboard-48.png';
  CPUIcon:string = '../../../assets/ICON/icons8-cpu-color/icons8-cpu-48.png';
  GPUIcon:string = '../../../assets/ICON/icons8-video-card-color/icons8-video-card-48.png';
  RAMIcon:string = '../../../assets/ICON/icons8-ram-wanicon-lineal-color/icons8-ram-64.png';
  constructor() { }

  ngOnInit(): void {
  }

}
