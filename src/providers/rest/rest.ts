import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform ,LoadingController} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private isCore;
  private result:object;
  private loader;
  private timeout = 45;
  //private apiUrl:string = "https://digiday.co.th";
  private apiUrl:string = "http://localhost:8100"
  constructor(public http: HTTP, platform:Platform, private httpClient:HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello RestProvider Provider');

    if(!platform.is('core')){
      this.isCore = true;
      console.log("platform=mobile")
     this.apiUrl = "https://digiday.co.th";

    }else{
      this.isCore = false;
     this.apiUrl = "http://localhost:8100"
    }

    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000,
      dismissOnPageChange: true
    });

  }

  /**
   * This function use for call service By get method
   * @param obj 
   * 
   */
  public getService(obj){

    let url = this.apiUrl+"/bms_dev/api/" + obj.serviceName + "/" + obj.getvalue
    console.log("url call = "+url);
    return new Promise((resolve,reject) => {
      if(!this.isCore){
        this.httpClient.get(url, { responseType: 'json' }).subscribe(data => {
          console.log("callsuccess")
          console.log(data)
          resolve(data);
        }, err => {
          console.log("error=");
          console.log(err);
        });
      }else{

        this.http.setRequestTimeout(this.timeout);
        this.http.get(url, {}, {})
        .then(data => {
          console.log(data.data)
          resolve(JSON.parse(data.data));
        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          reject(error);
        });
      }
    });
  }


}
