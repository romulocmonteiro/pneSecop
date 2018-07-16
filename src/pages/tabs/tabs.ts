import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { PeoplePage } from '../people/people';
import { AboutPage } from '../about/about';
import { SurveyPage } from '../survey/survey';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = ProductsPage;
  tab2Root = PeoplePage;
  tab3Root = AboutPage;
  tab4Root = SurveyPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('TabsPage loaded');
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
