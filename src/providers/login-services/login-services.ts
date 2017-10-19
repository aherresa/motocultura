import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the LoginServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServicesProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello LoginServicesProvider Provider');
  }
  
  public login (postParams){
    let body = 'email=' + postParams.email + '&password=' + postParams.password; 
     
    this.headersPost = new Headers({
      'content-Type':'aplication/x-www-form-urlencoded',
      'Access-Cotrol-Allow-Origin':'*'
    })
    let optionspost = new RequestOptions ({
      headers: this.headersPost
    }) 
    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-edward.herokuapp.com/api/signin', body, optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}