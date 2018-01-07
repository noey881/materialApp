import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllOrderPage } from './all-order';
import { AllOrderDetailPage } from '../all-order-detail/all-order-detail';

@NgModule({
  declarations: [
    AllOrderPage,
    AllOrderDetailPage
  ],
  imports: [
    IonicPageModule.forChild(AllOrderPage),
  ],
  entryComponents: [
    AllOrderDetailPage
    ]
})
export class AllOrderPageModule {}
