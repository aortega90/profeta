import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular'; 
import { Http } from '@angular/http';
import {PredictionsPage} from '../predictions/predictions';
/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {

    data:any = {};

  constructor(public navCtrl: NavController, 
            public http: Http
            )
  { 
    this.data.username = '';
    this.data.response = '';
    this.http = http;
  }

  submit() {
    console.log("holis");
     //var link = 'http://localhost/Api/api.php';
     //var link = 'http://lab.besign.com.ve/ProfetaDigital/Api/api.php';
     var link = 'http://lab.besign.com.ve/ProfetaDigital/Api/api.php';
     var myData = JSON.stringify({username: this.data.username});
     
     this.http.post(link, myData)
     .subscribe(data => {
     this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
     }, error => {
     console.log("Oooops!");
     });
     console.log("antes del if");
     console.log(this.data.response);
    
     
       this.navCtrl.push(PredictionsPage);

       console.log("dedeentro del ");
    
 }
}