import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AllOrderDetailPage } from '../all-order-detail/all-order-detail';

import { DatePipe } from '@angular/common';
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

  private tmpOrderList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider,
    public loadingCtrl: LoadingController,public modalCtrl: ModalController, private datePipe:DatePipe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOrderPage');
    this.getAllOrderList();
  }





  showDetail(i){
  
    this.navCtrl.push(AllOrderDetailPage, {
      id: i
    })
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
        this.tmpOrderList = data['data'];
        this.orderList.forEach((item, index) => {

        //  item.ORDER_DATE=new Date();
          this.orderList[index]['newDate'] = this.datePipe.transform(item.ORDER_DATE, 'dd MMMM yyyy');
          this.tmpOrderList[index]['newDate'] = this.datePipe.transform(item.ORDER_DATE, 'dd MMMM yyyy');
      });

      console.log(this.orderList)
       
     
      }else{
        
        
      }
      this.loader.dismiss();
    }).catch(error => {
     
      this.loader.dismiss();

      console.log("thisis")
      console.log(error);
    });
  }


  private getTmpOrderList(){
    this.orderList =  this.tmpOrderList;
  }

  getItems(ev) {
    // Reset items back to all of the items
    //this.initializeItems();
   // this.getTmpOrderList();
    let listFilter = [];
    // set val to the value of the ev target
    var val = ev.target.value;
   // console.log(this.tmpOrderList);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    //  this.orderList =
      
      
      this.tmpOrderList.filter((item) => {
          if(item.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1){
            listFilter.push(item);
          }

          if(item.LASTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1){
            listFilter.push(item);
          }

          if(item.RECEIPT_NO.toLowerCase().indexOf(val.toLowerCase()) > -1){
            listFilter.push(item);
          }

          if(item.newDate.toLowerCase().indexOf(val.toLowerCase()) > -1){
            listFilter.push(item);
          }

          
       
      // return (item.FIRSTNAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

      this.orderList = listFilter;

    }else{
      this.getTmpOrderList();
    }
  }

}
