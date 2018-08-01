import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {};
  appointments;
  constructor(private _userService: UserService, private _router: Router) { }



  ngOnInit() {
    this.currentUser();
    console.log(" CHECK!!")
    console.log(this.user)
    this.grabApts();
  }

  currentUser(){
    this._userService.grabUser().then(user => this.user = user).catch(err => console.log(err));
  }

  grabApts(){
    this._userService.retrieveAppointment().then(apts => this.appointments = apts).catch(err => console.log(err));
  }

  logoutUser(){
    this._userService.logout().then(response => {this._router.navigateByUrl('/');}).catch(err => console.log(err));
  }
  
  deleteApt(apt){
    console.log(apt);
    this._userService.destroyAppointment(apt).then(response => console.log("Deleting!!")).catch(err => console.log(err));
    this.grabApts();
  }

  gotoForm(){
    this._router.navigateByUrl('/form');
  }
}