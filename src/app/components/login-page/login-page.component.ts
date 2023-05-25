import {Component, OnInit} from '@angular/core';
import {state} from "@angular/animations";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{



  public state:any;
  constructor(private auth:AuthService) {
    this.state = {
      isLogin:true
    }
  }
  ngOnInit() {
  }




  changeLogin(){
    if(this.state.isLogin){
      this.state.isLogin = false;
    }else{
      this.state.isLogin = true;
    }
  }

}
