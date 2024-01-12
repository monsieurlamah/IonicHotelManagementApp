import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email : "",
    password : "",
  };

  type:boolean = true

  constructor() { }

  ngOnInit():void {
    ""
  }

  changeType(){
    this.type = !this.type;
  }

  goToForget(){

  }

  goToHome(){

  }
  facebookLogin(){

  }

  twitterLogin(){

  }
  gmailLogin(){

  }

  touchLogin(){

  }

  faceLogin(){

  }

  goToRegister(){
    
  }
}
