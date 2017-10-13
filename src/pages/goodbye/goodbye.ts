import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the GoodbyePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goodbye',
  templateUrl: 'goodbye.html',
})
export class GoodbyePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	let TIME_IN_MS = 9999;
        let hideFooterTimeout = setTimeout( () => {
            this.navCtrl.push(HomePage);
        }, TIME_IN_MS);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodbyePage');
  }

}
