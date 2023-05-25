import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [`./../login-page/login-page.component.css`]
})
export class SigninComponent implements OnInit{

  email : string = '';
  password : string = '';

  state = {
    emailId: this.email,
    password: this.password
  }

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  get_email_in(value:string){
    this.email = value;
  }
  get_password_in(value:string){
    this.password = value;
  }



  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }
}
