import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsejosPage } from './consejos';

@NgModule({
  declarations: [
    ConsejosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsejosPage),
  ],
})
export class ConsejosPageModule {}
