import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
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
  public isGetData:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private restProvider:RestProvider, public loadingCtrl: LoadingController) {
         
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
    console.log("productSel",this.productSel);
    console.log('Selected', selectedValue);
    this.getSizeProductFn(selectedValue);
    this.isGetData = false;
  }
  onProductSizeChange(selectedValue: any) {
    
    console.log('productSizeSel', selectedValue);
    //this.getSizeProduct(selectedValue);
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
  
     // this.loader.dismiss();
    
    });
  }





}
