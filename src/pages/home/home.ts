import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { MailPage } from '../mail/mail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


	constructor(public navCtrl: NavController, 
				public events:Events) {}
	onToucheNextPage()
	{
		console.log("paso");
		this.navCtrl.push(MailPage); 
	}
 	
}
