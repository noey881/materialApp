import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AllOrderDetailPage } from '../all-order-detail/all-order-detail';
/**
 * Generated class for the AllOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-order',
  templateUrl: 'all-order.html',
})
export class AllOrderPage {

  private loader;
  public orderList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider,
    public loadingCtrl: LoadingController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOrderPage');
    this.getAllOrderList();
  }





  showDetail(){

    let modal = this.modalCtrl.create(AllOrderDetailPage);
    modal.present();
  }

  getAllOrderList(){

    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: false
    });

    this.loader.present();
    let obj = {
      "serviceName": "get_all_order",
      "getvalue": ""
    }


    this.restProvider.getService(obj).then(data => {
     if(data["status"]){
        this.orderList = data['data'];
      }else{
        
        
      }
      this.loader.dismiss();
    }).catch(error => {
     
      this.loader.dismiss();

      console.log("thisis")
      console.log(error);


    });


  }

}
