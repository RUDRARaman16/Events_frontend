import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // UserDetails: any = {
  //   100: { userID: 100, username: "userone", password: "userone" },
  //   101: { userID: 101, username: "usertwo", password: "usertwo" },
  //   102: { userID: 102, username: "userthree", password: "userthree" },
  //   103: { userID: 103, username: "userfour", password: "userfour" }
  // }
  userID: any;
  pswd = "";
  // userID: any;
  // pswd: any;
  loginForm = this.fb.group(
    {
      userID: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]


    }
  )
  constructor(private router: Router, private dataservice: DataserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      var userID = this.loginForm.value.userID
      var pswd = this.loginForm.value.pswd
      this.dataservice.login(userID, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("dashboard")
            localStorage.setItem("name",result.name)
            localStorage.setItem("currentUID",userID)
          }
        },
          (result) => {
            alert(result.error.message);
          }
        )
    }
  }

  //   let users = this.dataservice.UserDetails
  //   if (id in users) {
  //     if (pswd == users[id]["password"]) {
  //       alert("Login Succesful")
  //       this.router.navigateByUrl("dashboard")
  //     }
  //     else {
  //       alert("Incorrect password")
  //     }
  //   }
  // // else {
  //       alert("Invalid Account")
  //     }
  //   }

  register() {
    this.router.navigateByUrl("register")
  }
}
