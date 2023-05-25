import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./../login-page/login-page.component.css']
})
export class SignupComponent implements OnInit{
  email : string = '';
  password : string = '';

  state = {
    emailId:this.email,
    name:'',
    userName:'',
    password:this.password
  }
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  get_email(value:string){
    this.email =value;
  }
  get_name(value:string){
    this.state.name = value;
    this.auth.nameService = value;
  }
  get_username(value:string){
    this.state.userName = value;
    this.auth.userNameService = value;
  }
  get_password(value:string){
    this.password = value
  }


  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);

    this.email = '';
    this.password = '';

  }
}
