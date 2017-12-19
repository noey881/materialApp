import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ReportPage } from '../pages/report/report';
import { ListPage } from '../pages/list/list';
import { Page3Page } from '../pages/page3/page3';
import { SettingsPage } from '../pages/settings/settings';
import { Step3Page } from '../pages/step3/step3';


import { CreateOrderPage } from '../pages/create-order/create-order';

import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;//CreateOrderPage;//LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
      statusBar.styleDefault();
              // set status bar to white
    // statusBar.backgroundColorByHexString('#CCCCCC');
      splashScreen.hide();

    });
 
  }
  shouldShow(){
    return true;
  }
  shouldShow2(){
    return false;
  }


  goToCreateOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreateOrderPage);
  }

  goToReport(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportPage);
  }
  
  goToList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListPage);
  }goToPage3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page3Page);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }
}
