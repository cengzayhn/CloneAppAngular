import {Component, OnInit} from '@angular/core';
import {MainPageComponent} from "../main-page/main-page.component";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor(public authService:AuthService) {
  }
  ngOnInit() {

  }



  commentVal:string;
  submitComments(event:any){
    //.currentTarget.value
    this.commentVal = event;
    let comment = event;
    if (this.commentVal!=null||this.commentVal!=undefined){
      this.authService.submitComment(this.commentVal);
    }
  }
}
