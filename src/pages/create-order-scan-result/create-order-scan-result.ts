import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CreateOrderAddMaterialPage } from '../create-order-add-material/create-order-add-material';
/**
 * Generated class for the CreateOrderScanResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-order-scan-result',
  templateUrl: 'create-order-scan-result.html',
})
export class CreateOrderScanResultPage {

  public statusIcon:string; //ios-checkmark-circle-outline //ios-close-circle-outline
  public querySataus:boolean =true;

  public resultData:object;
  public isData:boolean = false;
  private scannerId;
  private loader;

  private currentData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider
              ,public loadingCtrl: LoadingController) {
    this.statusIcon = "ios-checkmark-circle-outline";
    this.querySataus = true;
    this.scannerId = this.navParams.get('id');
    console.log(this.scannerId)


    // this.resultData = { 
    //   "name":"john doh",
    //   "userType":"ผู้ขาย",
    //   "address":"bangkok"

    // }
  }
    ionViewWillLeave() {
  

  }
  

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: false
    });

    this.loader.present()
    this.isData = false;

    let obj = {
      "serviceName":"users",
      "getvalue":this.scannerId

    }

    this.restProvider.getService(obj).then(data => {
      this.isData = true;
      this.currentData = data;
      this.loader.dismiss();
      this.resultData = { 
        "name": data['data']["FIRSTNAME"] +" "+data['data']["LASTNAME"],
        "userType": data['data']["USER_TYPE"],
        "address":"bangkok"
      }     
    });
  }

  nextPage():void{
    console.log("nextpage");
    console.log(this.currentData);
    this.navCtrl.push(CreateOrderAddMaterialPage, {
      data: this.currentData
    })
  }


}
