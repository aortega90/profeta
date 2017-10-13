import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { GoodbyePage } from '../goodbye/goodbye';

/**
 * Generated class for the PredictionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-predictions',
  templateUrl: 'predictions.html',
})
export class PredictionsPage {
  @ViewChild(Slides) slides: Slides;

  
  showSkip = true;
  dir: string = 'ltr';
  predicciones=[
  "Tu ropa ya no estará en el closet, sino en una impresora ",
  "La ropa podría hacerte más social, tus redes estarán en ella...",
  "Vivirás más años, con menos estrés y menos trabajo, pero te aburrirás más",
  "Alguno de tus órganos podría ser una impresión 3D",
  "Necesitarás un nuevo pasaporte, el que tienes no te permitirá entrar a algún planeta",  
  "Tus viajes familiares serán literalmente fueran de este mundo.",
  "Hablarás con las objetos y ya no te llamarán  loco por eso",
  "Los humanos no desaparecerán del planeta pero sí de internet",
  "Tu rostro te abrirá muchas puertas… y el email, el carro, tu teléfono... ",
  "La pregunta ¿eres robot o humano? será necesaria pero políticamente incorrecta",  
  "La energía eléctrica estará en tu ropa, no en un bombillo",
  "No harás trámites para viajar...Un par de lentes te harán llegar a tu destino",
  "Viajarás, vivirás sin moverte de tu sofá ",
  "Mirarás, sonreirás y comprarás ¡Cuidado con lo que piensas!",
  "¡No más grupos de whatsapp! pronto serán “historia”",  
  "Por fin responderás tu whatsapp mientras “manejas” sin sufrir un accidente",
  "La palabra “digital” no se escuchará más…",
  "No estarás pendiente de tu celular, porque ya nadie tendrá un celular…",
  "Extrañarás el estrés de trabajar largas horas y en una oficina",
  "No volverás a ver un vendedor en tu puerta... los paquetes llegarán 'solos'",
  "Pagarás con monedas de nombres que aún no conocemos"
  ];   

  random_predicciones=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
  	this.dir = platform.dir();
    this.randomPredictions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PredictionsPage');
  }


  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(currentIndex==3){
      let TIME_IN_MS = 6900;
        let hideFooterTimeout = setTimeout( () => {
            this.navCtrl.push(GoodbyePage);
        }, TIME_IN_MS);

    }
  }
  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }


  randomPredictions(){
    var limit =3;
    var random_numbers = [];
    var arrayLength = this.predicciones.length;
        while (random_numbers.length < limit) {
            var random_number = Math.floor(Math.random() * arrayLength);
            if (random_numbers.indexOf(random_number) == -1) {
                random_numbers.push(random_number);
            }
        }
        for(var i=0; i<limit;i++){
            this.random_predicciones.push(this.predicciones[random_numbers[i]]);
        }
  }

}
