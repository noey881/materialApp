import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CreateOrderScanResultPage } from '../create-order-scan-result/create-order-scan-result';

/**
 * Generated class for the CreateOderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-order',
  templateUrl: 'create-order.html',
})
export class CreateOrderPage {

  private scanSub;

  public scanStatus:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private qrScanner: QRScanner, public platform:Platform, public menuCtrl: MenuController) {

    this.menuCtrl.enable(true);
    this.scanStatus = "hide";
    //get permission
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {

      console.log(status);
       if (status.authorized) {
         // camera permission was granted
  

      
  
         // wait for user to scan something, then the observable callback will be called
  
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
         
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateOderPage');
  }

//for web-develop
  ionViewWillLeave() {
    console.log("DESTROY");
    if(this.scanStatus === "show"){
      this.hideCamera()
    }

  }
  
  //open camera and subscribe
  callQrScanner(){
    if(!this.platform.is('core')){
      let createOrder = this;
      // start scanning
      this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
       //createOrder.hideCamera() ;
       console.log('Scanned something', text);
     
       this.scanSuccess(text);
     });
     this.showCamera();
    
    }else{
        //by pass without scan
        this.scanSuccess(1)
    }
  }

   showCamera() {    
      this.qrScanner.show();
      this.scanStatus = "show";
      (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    }

    scanSuccess(id){
      console.log('scannsuccess')
      this.navCtrl.push(CreateOrderScanResultPage, {
        id: id
      })
    }

     hideCamera() {    
      this.qrScanner.hide(); // hide camera preview
      this.scanSub.unsubscribe(); // stop scanning
      this.scanStatus = "hide";
      (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    }
}
