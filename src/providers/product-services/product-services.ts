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
    let body='name='+postParams.name+'&picture='+postParams.picture+'&price='+postParams.price+'&category='+postParams.category+'&description='+postParams.description;
    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-example-felipeh.herokuapp.com/api/product',body,optionspost)
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
      this.http.post('https://api-rest-example-felipeh.herokuapp.com/api/signin',optionspost)
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
      this.http.delete('https://api-rest-example-felipeh.herokuapp.com/api/product'+id,optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
