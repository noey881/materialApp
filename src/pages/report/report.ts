import { Component } from '@angular/core';
import { NavController ,MenuController} from 'ionic-angular';


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
  
  }
}
