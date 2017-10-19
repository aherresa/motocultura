import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {LoginServicesProvider} from '../../providers/login-services/login-services';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: String;
  rootPage:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public http: Http,
    public LoginService: LoginServicesProvider, public navController: NavController) {
  }

  login(){
    let postParams={
      email : this.email,
      password : this.password
    }
    this.LoginService.login(postParams)
    .then((user)=>{
      let respuesta = JSON.parse(user["_body"]);
      if(user["status"] === 200){
        this.navController.setRoot(HomePage,{
        token: respuesta.token
      });
    }else{
    alert (respuesta.message);
    }
    }).catch((err)=>{
      alert("error"+err);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}