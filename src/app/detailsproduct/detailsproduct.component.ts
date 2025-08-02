import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
  }

}
