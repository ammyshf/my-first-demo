import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: ''
  }

  constructor(private router: Router) {

  }
  onLogin() {
    if (this.loginObj.username == "admin" && this.loginObj.password == "admin@123") {
      this.router.navigateByUrl("dashboard")
    } 
    else if(this.loginObj.username == "user123" && this.loginObj.password == "user@123" ) {
      this.router.navigateByUrl("readersect")
    }
    else {
      alert("Username or Password is wrong");
    }
  }
}
