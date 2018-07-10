import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  
  product;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.data.product;
  }

  pushPage(page) {
    this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

}
