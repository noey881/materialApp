import { Component } from '@angular/core';
import { NavController ,MenuController} from 'ionic-angular';

import {Page3Page} from '../page3/page3';
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
//    this.menuCtrl.open();
    this.menuCtrl.enable(true);
  }
  ssss(){
   this.navCtrl.push(Page3Page)
  }
}
