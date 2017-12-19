import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateOrderPage } from './create-order';
import { QRScanner } from '@ionic-native/qr-scanner';

import { CreateOrderScanResultPage } from '../create-order-scan-result/create-order-scan-result';
import { CreateOrderAddMaterialPage } from '../create-order-add-material/create-order-add-material';

@NgModule({
  declarations: [
    CreateOrderPage,
    CreateOrderScanResultPage,
    CreateOrderAddMaterialPage
  ],
  imports: [
    IonicPageModule.forChild(CreateOrderPage),
  ],
  providers:[
    QRScanner

  ],
  entryComponents: [
    CreateOrderScanResultPage,
    CreateOrderAddMaterialPage]
})
export class CreateOrderPageModule {}
