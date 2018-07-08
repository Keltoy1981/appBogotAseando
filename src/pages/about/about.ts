import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	autores: Array<any> = [
		{
			author: "Miguel Fernando Higuera Prieto"
		},{
			author: "Juan Pablo Contreras"
		}
	]

  constructor(public navCtrl: NavController) {

  }

}
