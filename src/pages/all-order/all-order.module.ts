import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllOrderPage } from './all-order';

@NgModule({
  declarations: [
    AllOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AllOrderPage),
  ],
})
export class AllOrderPageModule {}
