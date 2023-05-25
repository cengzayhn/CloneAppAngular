import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
  }

  userNameService: string = "";
  nameService: string = "";
  urlService:string = "";
  state = {
    postArray:[],
    commentList:[],
    storyList:[]
  }
  likeCount:number=143;


  //login
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      var user = userCredential.user;
      localStorage.setItem('token', JSON.stringify(user));
      this.router.navigate(['dashboard']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      alert('Registration Successful');

      var user = userCredential.user;
      let payload = {
        "userId": user?.uid,
        "userName": this.userNameService,
        "name": this.nameService,
        "profileImage": "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
      }
      const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(payload)
      }
      fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {

        })


      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  //signout
  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  //post
  post() {
    //const thisContext = this;
    let payload = {
      "postId":Math.floor(Math.random()*100000).toString(),
      "userId":JSON.parse(localStorage.getItem('token')).uid,
      "userName":this.userNameService,
      "postPath":this.urlService,
      "timeStamp":new Date().getTime(),
      "likeCount":this.likeCount
    }
    const requestOptions = {
      method : "POST",
      headers:{'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(payload)
    }
    fetch("http://localhost:8080/post",requestOptions)
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        this.state.postArray.push(data);
        console.log(this.state.postArray);
      })
      .catch(error=>{

      })

  }

  getComments = ()=>{
    fetch('http://localhost:8080/comments/1')
      .then(response=>response.json())
      .then(data=>{
        this.state.commentList.push(data)
      })
  }


  submitComment(comment:any) {
    let payload = {
      "commentId":Math.floor(Math.random()*100000).toString(),
      "userId":JSON.parse(localStorage.getItem("token")).uid,
      "postId":"000",
      "timeStamp":new Date().getTime(),
      "comment":comment

    }
    const requestOptions = {
      method : "POST",
      headers:{'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(payload)
    }
    //add postId later
    fetch("http://localhost:8080/comments",requestOptions)
      .then(response=>response.json())
      .then(data=>{
        //this.setState() eklenecek
        console.log(data)
        this.getComments();
      })
      .catch(error=>{

      })

  }

}
