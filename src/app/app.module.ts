import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReportPage } from '../pages/report/report';
import { ListPage } from '../pages/list/list';
import { Page3Page } from '../pages/page3/page3';
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

import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    ReportPage,
    ListPage,
    Page3Page,
    LoginPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    Step3PageModule,
    CreateOrderPageModule,
    HttpClientModule,

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
    Page3Page,
    LoginPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HTTP,
    DecimalPipe,
    AlertController
   // AuthenticaitonProvider

  ]
})
export class AppModule {}