import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() result3:any;

  confirmation() {
    window.confirm('Voulez-vous vraiment vous déconnecter?');
  }

  cartIcon = '../../assets/ICON/icons8-cart-windows-11-color/icons8-cart-48.png';

  constructor() { }

  ngOnInit(): void {
  }

}
