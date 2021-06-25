import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  edate: any;
  edes: any;
  userID: any;
  password: any;


  constructor(private dataservice: DataserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  addEvent() {
    var userID = this.userID
    var edate = this.edate
    var edes = this.edes
    this.dataservice.addEvent(userID, edate, edes)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("dashboard")
        }
      },
        (result)=>{
          alert(result.error.message)
        }
      )
  }



back() {
  this.router.navigateByUrl("dashboard")
}
}
