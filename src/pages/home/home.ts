import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsejosPage } from '../consejos/consejos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	consejos = [];

  constructor(public navCtrl: NavController) {
  	this.consejos = [
  		{
  			'title': 'Pilas',
  			'icon': 'battery-charging',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
  			'color': '#808000'
  		},
  		{
  			'title': 'Computadores',
  			'icon': 'desktop',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
  			'color': '#808000'
  		},
  		{
  			'title': 'Llantas',
  			'icon': 'disc',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
  			'color': '#808000'
  		},
  		{
  			'title': 'Medicamentos',
  			'icon': 'medkit',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
  			'color': '#808000'
  		},
  		{
  			'title': 'Plaguicidas',
  			'icon': 'bug',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
  			'color': '#808000'
  		}
  	]
  }

  openNavDetailsPage(item){
  	this.navCtrl.push(ConsejosPage, {item: item});
  }

}
