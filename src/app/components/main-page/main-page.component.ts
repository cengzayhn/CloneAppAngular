import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AuthService} from "../../shared/auth.service";
import * as url from "url";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  constructor(private fireStorage:AngularFireStorage, private authService:AuthService) {
  }
  ngOnInit() {
  }

  //state service de




  /*
  deneme(){
    this.state.postArray.map((item,index)=>{

    })
  }*/

  async onFileChange(event:any){
    const file = event.target.files[0];
    if (file){
      const path = `images/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path,file);
      const url = await uploadTask.ref.getDownloadURL();
      this.authService.urlService = url;
      this.authService.post()
    }
  }
}
