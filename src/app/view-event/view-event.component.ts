import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  eventDetails: any;

  constructor(private dataservice: DataserviceService,private router: Router) {

    let userID = localStorage.getItem("currentUID")

    this.dataservice.viewEvent(userID)
      .subscribe((result: any) => {
        if (result) {
          this.eventDetails = result.message
        }
      },
        (result) => {
          alert(result.error.message);
        }

      )
  }

  ngOnInit(): void {

  }
  back() {
    this.router.navigateByUrl("")
  }
}
