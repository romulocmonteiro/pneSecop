import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class PneSecop2018 {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.rootPage = IntroPage

      if(platform.is('android')) {
        statusBar.styleLightContent();
      } else {
        statusBar.styleDefault();
      }
      splashScreen.hide();
    });

  }
  
}   
