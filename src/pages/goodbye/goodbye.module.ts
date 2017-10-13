import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodbyePage } from './goodbye';

@NgModule({
  declarations: [
    GoodbyePage,
  ],
  imports: [
    IonicPageModule.forChild(GoodbyePage),
  ],
})
export class GoodbyePageModule {}
