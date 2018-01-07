import { NgModule, ErrorHandler,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReportPage } from '../pages/report/report';
import { ListPage } from '../pages/list/list';

import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import {Step3PageModule} from '../pages/step3/step3.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AuthenticaitonProvider } from '../providers/authenticaiton/authenticaiton';
import { CreateOrderPageModule } from '../pages/create-order/create-order.module';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

import { DecimalPipe, registerLocaleData, DatePipe } from '@angular/common';

import { AllOrderPageModule } from '../pages/all-order/all-order.module';
import { Geolocation } from '@ionic-native/geolocation';


import localeTh from '@angular/common/locales/th';
registerLocaleData(localeTh, 'th');
@NgModule({
  declarations: [
    MyApp,
    ReportPage,
    ListPage,

    LoginPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    Step3PageModule,
    CreateOrderPageModule,
    HttpClientModule,
    AllOrderPageModule,

    IonicModule.forRoot(MyApp,{
      backButtonText: 'ย้อนกลับ',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportPage,
    ListPage,
    LoginPage,
    SettingsPage
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue: 'th-TH'},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HTTP,
    DecimalPipe,
    AlertController,
    Geolocation,
    DatePipe
    
   // AuthenticaitonProvider

  ]
})
export class AppModule {}