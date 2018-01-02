import { Component } from '@angular/core';
import { NavController, MenuController,AlertController, LoadingController} from 'ionic-angular';
//import { ReportPage } from '../report/report';
import { CreateOrderPage } from '../create-order/create-order';
// import { AuthenticaitonProvider } from '../../providers/authenticaiton/authenticaiton';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
username: AbstractControl;
password: AbstractControl;  
authForm: FormGroup;   
private loader;     
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public menuCtrl: MenuController,
    private restProvider: RestProvider,
    public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
 
    // this.username = this.authForm.controls['username'];     
    // this.password = this.authForm.controls['password'];    
    this.menuCtrl.enable(false);
this.authForm = formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])], //Validators.pattern('[a-zA-Z]*')
    password: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
});

 }

     onSubmit(value: any): void { 
      this.loader = this.loadingCtrl.create({
        content: 'กำลังเข้าสู่ระบบ...',
        duration: 30000,
        dismissOnPageChange: false
      });
  
      
     
        if(this.authForm.valid) {

          let obj = {
            "serviceName": "auth_user",
              "params":{
                  "sUsername":value.username,
                  "sPassword":value.password
            
              }
            
          };


          this.loader.present()
          this.restProvider.postService(obj).then(data => {
            console.log(data['status'])
            if(data['status']){

              this.restProvider.setUserData(data['data']);
              this.navCtrl.setRoot(CreateOrderPage);
            }
            this.loader.dismiss();
          }).catch(error => {
            console.log(error);
            this.loader.dismiss();
            this.showPrompt() 
          });
            console.log("submit")
      
          //  window.localStorage.setItem('password', value.password);
 
      
        }
    }  


    showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด',
        message: "<p>Username หรือ Password ไม่ถูกต้อง</p>",
      
        buttons: [
       
          {
            text: 'ยืนยัน',
            handler: data => {
          
            }
          }
        ]
      });
      prompt.present();
    }

// auth(){
//   this.AuthenticaitonProvider.sendAuth("aa","bb");
// }

  
}
