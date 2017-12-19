import { Component } from '@angular/core';
import { NavController, MenuController} from 'ionic-angular';
//import { ReportPage } from '../report/report';
import { CreateOrderPage } from '../create-order/create-order';
// import { AuthenticaitonProvider } from '../../providers/authenticaiton/authenticaiton';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
username: AbstractControl;
password: AbstractControl;  
authForm: FormGroup;   
     
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public menuCtrl: MenuController) {
 
    // this.username = this.authForm.controls['username'];     
    // this.password = this.authForm.controls['password'];    
    this.menuCtrl.enable(false);
this.authForm = formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])], //Validators.pattern('[a-zA-Z]*')
    password: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
});

 }

     onSubmit(value: any): void { 
    
     
        if(this.authForm.valid) {

                 console.log("submit")
            this.navCtrl.setRoot(CreateOrderPage);

          //  window.localStorage.setItem('password', value.password);
 
      
        }
    }  

// auth(){
//   this.AuthenticaitonProvider.sendAuth("aa","bb");
// }

  
}
