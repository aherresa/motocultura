import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServicesProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProductServicesProvider Provider');
  }

  public newProduct(token,postParams){
    let body='nombre='+postParams.nombre+'&descripcion='+postParams.descripcion;
    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-edward.herokuapp.com/api/norm',body,optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }

  public getProduct(token){
    this.headersPost = new Headers({
      'content-Type':'aplication/x-www-form-urlencoded',
      'Access-Cotrol-Allow-Origin':'*',
      'Authorization':'Bearer'+token
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-edward.herokuapp.com/api/norm',optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }

  public deleteProduct(token,id){
    this.headersPost = new Headers({
      'content-Type':'aplication/x-www-form-urlencoded',
      'Access-Cotrol-Allow-Origin':'*',
      'Authorization':'Bearer'+token
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.delete('https://api-rest-edward.herokuapp.com/api/norm'+id,optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
