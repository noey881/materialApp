import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllOrderPage } from './all-order';
import { AllOrderDetailPage } from '../all-order-detail/all-order-detail';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';


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
    ],
    providers: [
     
   GoogleMaps

    ]
})
export class AllOrderPageModule {}
