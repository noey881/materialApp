import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
import { RestProvider } from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';
import { AllOrderPage } from '../all-order/all-order';
import { AllOrderDetailPage } from '../all-order-detail/all-order-detail'

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
  public producTypeObj;
  private loader;
  public productSel;
  public productSizeSel;
  public producSizeObj;
  private userData = {};

  public displayUserData = {};
  private tmpProductSizeObj: object = {};
  private tmpProductTypeObj: object = {};
  public isGetData: boolean = false;
  public qty;
  public weight;
  public price;

  public canAdd = false;

  private currentIndexEditObj;
  private currentObj;
  public arrayAdded = [];
  public isEdit = false;


  public sumPrice;
  public sumWeight;
  public sumQty;

  private geolocationData;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private restProvider: RestProvider, public loadingCtrl: LoadingController,
    private decimalPipe: DecimalPipe,
    private geolocation: Geolocation,
    public alertCtrl: AlertController) {

    this.userData = this.navParams.get('data');

    console.log(this.userData)
    this.currentObj = {
      "id": "",
      "productType": "",
      "productSize": "",
      "qty": "",
      "weight": 0,
      "price": 0
    }

    this.weight = this.currentObj.weight;
    this.price = this.currentObj.price;
  }

  ionViewDidLoad() {
    this.isEdit = false;
    console.log('ionViewDidLoad CreateOrderAddMaterialPage');
    this.displayUserData = { "fullname": this.userData['data']['FIRSTNAME'] + " " + this.userData['data']['LASTNAME'] };
    this.getProducType();
    this.sumPrice = 0.00;
    this.sumWeight = 0.00;
    this.sumQty = 0.00;
  }



  getProducType() {

    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: false
    });

    this.loader.present()
    let obj = {
      "serviceName": "get_type_product",
      "getvalue": ""
    }

    this.restProvider.getService(obj).then(data => {
      console.log(data)
      this.producTypeObj = data["data"];

      this.producTypeObj.forEach(item => {
        this.tmpProductTypeObj[item.PRODUCT_TYPE_ID] = item;
      });

      this.loader.dismiss();
    });
  }

  onProductTypeChange(selectedValue: any) {

    if (this.productSel > 0) {
      this.currentObj.productType = selectedValue;
      this.getSizeProductFn(selectedValue);
      this.isGetData = false;
      this.currentObj.productSize = "";
      this.calculate()
    }
  }
  onProductSizeChange(selectedValue: any) {
    this.currentObj.productSize = selectedValue;
    console.log('productSizeSel', selectedValue);
    //this.getSizeProduct(selectedValue);
    this.calculate();
  }

  onQtyChange() {
    this.currentObj.qty = this.qty;
    console.log(this.qty);
    this.calculate();
  }



  getSizeProductFn(productId) {

    // this.loader.present();
    let obj = {
      "serviceName": "get_product",
      "getvalue": productId
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





  private calculate() {
    if (this.isValue()) {
      let calWeight: any = this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['ITEM_WEIGHT'];
      let calPrice: any = this.currentObj.qty * this.tmpProductSizeObj[this.currentObj.productSize]['PRICE_PER_ITEM'];

      calWeight = this.decimalPipe.transform(calWeight, '1.2-2');
      calPrice = this.decimalPipe.transform(calPrice, '1.2-2');
      console.log(parseFloat(calPrice.replace(/,/g,''))),
      this.weight = calWeight;
      this.currentObj.weight = calWeight;
      this.price = calPrice;
      this.currentObj.price = calPrice;
      this.canAdd = true;


    } else {
      this.weight = 0;
      this.currentObj.weight = 0;
      this.price = 0;
      this.currentObj.price = 0;
      this.canAdd = false;
    }

  }

  private isValue() {
    if (this.currentObj.productType !== "" && this.currentObj.productSize !== "" && (this.currentObj.qty !== "" && this.currentObj.qty > 0)) {
      this.canAdd = true;
      console.log("isgetval")
      return true;


    } else {
      this.canAdd = false;
      return false;
    }
  }


  public getProductTypeName(productTypeId) {

    return this.tmpProductTypeObj[productTypeId]['PRODUCT_TYPE_NAME'];
  }

  public getProductSizeName(productSizeId) {


    return this.tmpProductSizeObj[productSizeId]['PRODUCT_SIZE_NAME'];
  }

  private addItem() {
    let myobj = this.currentObj;
    this.arrayAdded.push(myobj)
    this.clearInputList();
    // console.log(this.arrayAdded);
  }

  editItem() {

    let myobj = this.currentObj;
    this.arrayAdded[this.currentIndexEditObj] = myobj;

    this.clearInputList();


  }

  private clearInputList() {

    this.isEdit = false;
    this.currentObj = {
      "id": "",
      "productType": "",
      "productSize": "",
      "qty": "",
      "weight": 0,
      "price": 0
    }
    this.productSel = 0;
    this.productSizeSel = 0;
    this.qty = 0;
    this.weight = 0;
    this.price = 0;
    this.isGetData = false;


    this.sumValue();
  }


  public editList(index) {
    this.isEdit = true;
    this.currentIndexEditObj = index;
    let getval = this.arrayAdded[index];

    this.currentObj = {
      "id": "",
      "productType": getval.productType,
      "productSize": getval.productSize,
      "qty": getval.qty,
      "weight": getval.weight,
      "price": getval.price
    }


    this.productSel = getval.productType;
    this.productSizeSel = getval.productSize;
    this.qty = getval.qty;
    this.weight = getval.weight;
    this.price = getval.price;

    console.log(index);

  }


  private sumValue(){
    let tmpPrice = 0.00;
    let tmpWeigth = 0.00;
    let tmpQty = 0;
    this.arrayAdded.forEach(item => {

      tmpPrice = tmpPrice + parseFloat(item.price.replace(/,/g,''));
      tmpWeigth = tmpWeigth + parseFloat(item.weight.replace(/,/g,''));
      tmpQty = tmpQty + parseFloat(item.qty.replace(/,/g,''));

    });
    console.log(tmpPrice)


    this.sumQty = tmpQty;


    this.sumPrice = this.decimalPipe.transform(tmpPrice, '1.2-2');;
    this.sumWeight = this.decimalPipe.transform(tmpWeigth, '1.2-2');;

  }

  public removeList(index) {
    this.arrayAdded.splice(index, 1);
    this.sumValue();
  }



  public submitList(){
//receive_new_order
    let tmpArray = [];

    let userid = this.restProvider.getUserData();
    console.log(userid)
    console.log("userID===",userid.USER_ID)

    this.arrayAdded.forEach(item => {

      let newvalue = {

        "iProductTypeID" : item.productType,
        "iProductSizeID" : item.productSize,
        "iProductWeight" : this.tmpProductSizeObj[item.productSize]['ITEM_WEIGHT'],
        "iTotalAmount" :    parseFloat(item.price.replace(/,/g,'')),
        "iProductPrice" : this.tmpProductSizeObj[item.productSize]['PRICE_PER_ITEM'],
        "iProduct_Qty": item.qty
      }

      tmpArray.push(newvalue);
    });


    //this.geolocationData = resp;
      // resp.coords.latitude

    let obj = {
      "serviceName": "receive_new_order",
        "params":{
            "iBuyerID":userid.USER_ID,
            "iFarmerID":this.userData['data']['USER_ID'],
            "iItemQty":this.sumQty,
            "iNetOrderPrice": parseFloat(this.sumPrice.replace(/,/g,'')),
            "sLocation_LAT":this.geolocationData.coords.latitude || 0,
            "sLocation_LNG": this.geolocationData.coords.longitude || 0,
            "sLocation_ACCURACY":this.geolocationData.coords.accuracy|| 0,
            "sLocation_ALTITUDE":this.geolocationData.coords.altitude|| 0,
            "sLocation_HEADING":this.geolocationData.coords.heading|| 0,
            "sLocation_SPEED":this.geolocationData.coords.speed|| 0,
            "sLocation_ALTACC":this.geolocationData.coords.altitudeAccuracy|| 0,
            "aData_ItemOrder": tmpArray
        }
    };
  console.log("senddata ----------------------------")
  console.log(obj);

  this.loader = this.loadingCtrl.create({
    content: 'Please wait...',
    duration: 30000,
    dismissOnPageChange: false
  });

  this.loader.present();

    this.restProvider.postService(obj).then(data => {
      console.log(data)
      this.loader.dismiss();

      this.navCtrl.setRoot(AllOrderDetailPage, {tmpId: obj,
                                          fromPage:"addMaterial"});
 

    });
    
  }


  private getLocation(){

    console.log("callgeo----------")
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geolocationData = resp;
      // resp.coords.latitude
      this.submitList()
      console.log("----------------")
     console.log(JSON.stringify(resp));
      // resp.coords.longitude
     }).catch((error) => {
      this.geolocationData = null;
      this.submitList()
       console.log('Error getting location', JSON.stringify(error));
     });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: "<p>คุณต้องการยืนยันการสั่งซื้อหรือไม่</p>",
    
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            this.getLocation();
           
          }
        }
      ]
    });
    prompt.present();
  }
}
