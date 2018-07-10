import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetailPage {
  
  people;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.people = navParams.data.people;
  }

  pushPage(page) {
    this.navCtrl.push(page);
  }

  openLinkedinProfile(people) {
    if (people != 'Definir') {
      window.open('http://www.linkedin.com/in/' + people, '_self', 'location=no');
    } else {
      let toast = this.toastCtrl.create({
        message: 'Ainda preciso definir o seu perfil!',
        duration: 1500,
        position: 'middle'
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailPage');
  }

}
