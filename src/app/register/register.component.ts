import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  userID = "";
  pswd = "";

  registerForm = this.fb.group(
    {
      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      userID: ['', Validators.required, Validators.pattern('[0-9]*')],
      pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]


    }
  )
  constructor(private router: Router, private dataservice: DataserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    
      var uname = this.registerForm.value.uname;
      var userID = this.registerForm.value.userID
      var pswd = this.registerForm.value.pswd
      // const result=this.dataservice.register(uname,userID,pswd)
      this.dataservice.register(uname, userID, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }

  }
  // let users = this.dataservice.UserDetails
  // if (id in users) {
  //   alert("User Exist")

  // }
  // else {
  //   users[id] = {
  //     id,
  //     username: uname,
  //     password: pswd
  //   }
  //   alert("Successfully Registered")
  //   this.router.navigateByUrl("")


