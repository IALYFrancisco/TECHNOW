import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Inject(DataService)
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  data:any = DataService

  displayLog(): void {
    this.data.giveMessage()
  }

  ngOnInit(): void {
  }

}
