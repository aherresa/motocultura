import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import {LoginPage} from '../pages/login/login';
import {NewProductPage} from '../pages/new-product/new-product';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginServicesProvider } from '../providers/login-services/login-services';
import { ProductServicesProvider } from '../providers/product-services/product-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicesProvider,
    ProductServicesProvider
  ]
})
export class AppModule {}
