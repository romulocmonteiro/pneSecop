import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetailPage {
  
  people;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastCtrl: ToastController, 
    private emailComposer: EmailComposer) {
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

  sendEmail(email_to) {

    let email = {
      to: email_to,
      cc: '',
      //bcc: ['john@doe.com', 'jane@doe.com'],
      //attachments: [
      //  'file://img/logo.png',
      //  'res://icon.png',
      //  'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //  'file://README.pdf'
      //],
      subject: 'Petronect - SECOP 2018',
      body: 'Petronect - SECOP 2018',
      isHtml: true
    };

    this.emailComposer.open(email);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailPage');
  }

}
