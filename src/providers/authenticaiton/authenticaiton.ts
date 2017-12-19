 
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticaitonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticaitonProvider {

  constructor() {
    console.log('Hello AuthenticaitonProvider Provider');
  }


  public sendAuth(user:string,pass:string){

      console.log(user)
  }
}
