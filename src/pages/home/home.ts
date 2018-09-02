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
  			'contain': 'Cuando tus pilas dejan de ser útiles se vuelven residuos especiales y deben tener una gestión ambientalmente segura.',
        'contain2':'Trabaja con tus vecinos, creen un mini/mediano-contenedor en sus casas o apartamentos.',
        'contain3':'Difundan su mensaje y campaña de recolección.',
        'contain4':'Participen activamente con sus familiares y amigos.',
        'contain5':'Recolecten sus pilas y deposítenlas en los puntos de recolección especializados',
        'contain6':'Conviértete en un consumidor responsable',
  			'color': '#808000'
  		},
  		{
  			'title': 'Computadores',
  			'icon': 'desktop',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
        'contain2':'',
        'contain3':'',
        'contain4':'',
        'contain5':'',
        'contain6':'',
  			'color': '#808000'
  		},
  		{
  			'title': 'Llantas',
  			'icon': 'disc',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
        'contain2':'',
        'contain3':'',
        'contain4':'',
        'contain5':'',
        'contain6':'',
  			'color': '#808000'
  		},
  		{
  			'title': 'Medicamentos',
  			'icon': 'medkit',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
        'contain2':'',
        'contain3':'',
        'contain4':'',
        'contain5':'',
        'contain6':'',
  			'color': '#808000'
  		},
  		{
  			'title': 'Plaguicidas',
  			'icon': 'bug',
  			'contain': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id ad dicta, dolorem ab, quisquam, nam dignissimos vitae consequuntur illo quos. Cupiditate labore tempora nam vel, accusamus rem aliquid facere.',
        'contain2':'',
        'contain3':'',
        'contain4':'',
        'contain5':'',
        'contain6':'',
  			'color': '#808000'
  		}
  	]
  }

  openNavDetailsPage(item){
  	this.navCtrl.push(ConsejosPage, {item: item});
  }

}
