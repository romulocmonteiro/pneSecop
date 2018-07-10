import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { PeoplePage } from '../people/people';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = ProductsPage;
  tab2Root = PeoplePage;
  tab3Root = AboutPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('TabsPage loaded');
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
