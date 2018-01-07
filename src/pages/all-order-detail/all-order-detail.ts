import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AllOrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-all-order-detail',
  templateUrl: 'all-order-detail.html',
})
export class AllOrderDetailPage {
  private orderDetailId;
  public userDisplay = [];
  public orderDetailData;
  private loader;

  private getFromPage;
  private summaryResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.orderDetailId = this.navParams.get('id');
    this.userDisplay = this.navParams.get('id');

    this.getFromPage = this.navParams.get('fromPage');
    this.summaryResult = this.navParams.get('tmpId');


    if( this.getFromPage == "addMaterial"){

      
    }

    console.log(" this.getFromPage="+   this.getFromPage);
    console.log(" this.getFromPage="+   this.summaryResult);
    console.log('ionViewDidLoad AllOrderDetailPage id=' + JSON.stringify(this.orderDetailId) );
    this.getOrderDetail();
  }




  getOrderDetail(){

    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: false
    });

    this.loader.present();
    let obj = {
      "serviceName": "view_item_order",
      "getvalue": this.orderDetailId.ORDER_ID
    }


    this.restProvider.getService(obj).then(data => {
     if(data["status"]){
       console.log(data);
         this.orderDetailData = data['data'];
   
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
