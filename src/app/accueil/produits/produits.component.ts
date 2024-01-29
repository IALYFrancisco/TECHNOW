import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  @Output() emetteur2 = new EventEmitter<number>();
    
  result1:any;

  recuperation1(nouvelle1:any) {
    this.result1 = nouvelle1;
    this.emetteur2.emit(this.result1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
