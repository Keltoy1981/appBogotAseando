import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapaPage } from '../mapa/mapa';
import { ListaPage } from '../lista/lista';
import { ReportePage } from '../reporte/reporte';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapaPage;
  tab3Root = ListaPage;
  tab4Root = ReportePage;
  tab5Root = AboutPage;
  tab6Root = ContactPage;

  constructor() {

  }
}
