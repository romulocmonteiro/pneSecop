import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener'; 

import { PneSecop2018 } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ProductsPageModule } from '../pages/products/products.module';
import { ProductDetailPageModule } from '../pages/product-detail/product-detail.module';
import { AboutPageModule } from '../pages/about/about.module';
import { PeoplePageModule } from '../pages/people/people.module';
import { PeopleDetailPageModule } from '../pages/people-detail/people-detail.module';

@NgModule({
  declarations: [
    PneSecop2018, 
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule, 
    IonicModule.forRoot(PneSecop2018),
    IntroPageModule,
    ProductsPageModule,
    ProductDetailPageModule,
    PeoplePageModule,
    PeopleDetailPageModule,
    AboutPageModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    PneSecop2018, 
    TabsPage],
  providers: [
    StatusBar, 
    SplashScreen, { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler 
    },
    FileOpener
  ]
})
export class AppModule { }
