import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
// eventDetails[Date,eventName]
export class DataserviceService {
  UserDetails: any = {
    100: { userID: 100, username: "userone", password: "userone", events: [] },//another object
    101: { userID: 101, username: "usertwo", password: "usertwo", events: [] },
    102: { userID: 102, username: "userthree", password: "userthree", events: [] },
    103: { userID: 103, username: "userfour", password: "userfour", events: [] }
  }
  currentUID = ""
  user: any;
  options = {
    withCredentials: true
  }
  // userID: any;
  constructor(private http: HttpClient) {
   // this.getDetails()
  }

  // saveDetails() {

  //   localStorage.setItem("UserDetails", JSON.stringify(this.UserDetails))
  //   if (this.currentUID) {
  //     localStorage.setItem("currentUID", JSON.stringify(this.currentUID))
  //     console.log(this.currentUID)
  //   }
  // }

  // getDetails() {
  //   if (localStorage.getItem("UserDetails")) {
  //     this.UserDetails = JSON.parse(localStorage.getItem("UserDetails"))
  //   }
  //   if (localStorage.getItem("currentUID")) {
  //     this.currentUID = JSON.parse(localStorage.getItem("currentUID"))
  //     console.log(this.currentUID)
  //   }
  // }
  login(userID: any, pswd: any) {
    const data={
     
      userID,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data,this.options)
    // let users = this.UserDetails
    // if (id in users) {
    //   if (pswd == users[id]["password"]) {
    //     this.currentUID = users[id]["id"]
    //     this.saveDetails()
    //     return true
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {

    //   return false
    // }
  }


  register(uname: any, userID: any, pswd: any) {
    const data={
      uname,
      userID,
      pswd
    }
    return this.http.post('http://localhost:3000/register',data,this.options)
    // let users = this.UserDetails
    // if (id in users) {
    //   return false

    // }
    // else {
    //   users[id] = {
    //     id,
    //     username: uname,
    //     password: pswd,
    //     events: []
    //   }
    //   // this.saveDetails()
    //   return true
    // }
  }
  addEvent(userID: any, edate: any, edes: any) {
    const data={
     
      userID,
      edate,
      edes
    }
    return this.http.post('http://localhost:3000/addEvent',data,this.options)
    // let users = this.UserDetails
    // console.log(users)
    // if (id in users) {
      
    //     users[id]["events"].push({
    //       edate: edate,
    //       edes: edes
    //     })
    //      //this.saveDetails()
        
    //     console.log(users[id]["events"])
    //     return true
      
    // }
    // else {
    //   return false
    // }
  }

  viewEvent(userID) {
    const data={
     
      userID,
      
    }
    return this.http.post('http://localhost:3000/viewEvent',data,this.options)
    // let users=this.UserDetails;
    // console.log(id)
    // if(id in users){
    //   console.log(id)
    //   return users[id]["events"]
    // }
     
    
  }
}
// if(this.currentUID){
    //   let users=this.UserDetails
    //   console.log(users)
    //   let id=this.currentUID
    //   console.log(id)
    //   console.log(users[id]["events"])
    //   return(users[id]["events"])
