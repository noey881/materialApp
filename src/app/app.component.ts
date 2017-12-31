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

import { RestProvider } from '../providers/rest/rest';

import { AllOrderPage } from '../pages/all-order/all-order';
import { LoginPage } from '../pages/login/login';

import { Geolocation } from '@ionic-native/geolocation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;//CreateOrderPage;//LoginPage;
public userName;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController
              , private restProvider:RestProvider, private geolocation: Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
      statusBar.styleDefault();
              // set status bar to white
    // statusBar.backgroundColorByHexString('#CCCCCC');
      splashScreen.hide();

      


      console.log("callgeo----------")
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude

        console.log("----------------")
       console.log(JSON.stringify(resp));
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', JSON.stringify(error));
       });
       

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

  goToAllOrder(){
    this.navCtrl.setRoot(AllOrderPage);
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
