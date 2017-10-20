import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductServicesProvider} from '../../providers/product-services/product-services';
import {} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  token : String;
  nombre : String;
  descripcion : String;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public productService: ProductServicesProvider) {
      this.token = navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProductPage');
  }

}
