import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any

  constructor(private router: Router, private dataservice: DataserviceService) {
    this.user=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  addEvent() {
    this.router.navigateByUrl("addEvent")
  }
  viewEvent() {
    this.router.navigateByUrl("view")
  }
  back() {
    this.router.navigateByUrl("")
  }
}
