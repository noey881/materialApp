import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
import { RestProvider } from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the CreateOrderAddMaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-order-add-material',
  templateUrl: 'create-order-add-material.html',
})
export class CreateOrderAddMaterialPage {
  public gender;
  public producTypeObj:object;
  private loader;
  public productSel;
  public producSizeObj;

  private tmpProductSizeObj:object = {};

  public isGetData:boolean = false;
  public qty;
  public weight;
  public price;



  private currentObj;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private restProvider:RestProvider, public loadingCtrl: LoadingController,
              private decimalPipe: DecimalPipe,
              private geolocation:Geolocation) {
         
  
                this.currentObj = {
                  "id":"",
                  "productType":"",
                  "productSize":"",
                  "qty":"",
                  "weight":0,
                  "price":0
                }

                this.weight = this.currentObj.weight;
                this.price = this.currentObj.price;
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateOrderAddMaterialPage');
    this.getProducType();
  }



  getProducType(){

    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: false
    });
    
    this.loader.present()
    let obj = {
      "serviceName":"get_type_product",
      "getvalue":""
    }

    this.restProvider.getService(obj).then(data => {
      console.log(data)
      this.producTypeObj = data["data"];
      this.loader.dismiss();
    });
  }



  

  

  onProductTypeChange(selectedValue: any) {
    this.currentObj.productType = selectedValue;
    this.getSizeProductFn(selectedValue);
    this.isGetData = false;
    this.currentObj.productSize = "";
    this.calculate()

  }
  onProductSizeChange(selectedValue: any) {
    this.currentObj.productSize = selectedValue;
    console.log('productSizeSel', selectedValue);
    //this.getSizeProduct(selectedValue);
    this.calculate();
  }

  onQtyChange(){
    this.currentObj.qty = this.qty;
    console.log(this.qty);
    this.calculate();
  }

  

  getSizeProductFn(productId){

   // this.loader.present();
   let obj = {
          "serviceName":"get_product",
          "getvalue":productId
        }
    this.restProvider.getService(obj).then(data => {
      console.log(data)
    
      this.producSizeObj = data["data"];
      this.isGetData = data['status'];
      

      //used for calculate
      this.producSizeObj.forEach(item => {
        this.tmpProductSizeObj[item.PRODUCT_SIZE_ID] = item;
      });


      console.log("-------------------")
      console.log(this.tmpProductSizeObj);
     // this.loader.dismiss();
    
    });
  }



  getPosition(){
    console.log("getcurrentposition")

      this.geolocation.getCurrentPosition().then((resp) => {
        
         console.log(resp)
      //   // resp.coords.latitude
      //   // resp.coords.longitude
     }).catch((error) => {
      //   console.log('Error getting location', error);
    });
  }




  private calculate(){
    if(this.isValue()){
      let calWeight:any =  this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['ITEM_WEIGHT'];
      let calPrice:any  = this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['PRICE_PER_ITEM'];

          calWeight     = this.decimalPipe.transform(calWeight, '1.2-2');
          calPrice      = this.decimalPipe.transform(calPrice, '1.2-2');

      this.weight = calWeight;
      this.currentObj.weight = calWeight;
      this.price = calPrice;
      this.currentObj.price = calPrice;



    }else{
      this.weight = 0;
      this.currentObj.weight = 0;
      this.price = 0;
      this.currentObj.price = 0;
    }

  }

  private isValue(){
    if( this.currentObj.productType !== "" && this.currentObj.productSize !=="" && (this.currentObj.qty !== "" &&  this.currentObj.qty > 0)){
      return true;

    }else{

      return false;
    }


  }



}
