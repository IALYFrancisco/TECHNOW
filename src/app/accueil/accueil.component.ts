import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Output() result2:any;

  recuperation2(nouvelle1:any) {
    this.result2 = nouvelle1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
