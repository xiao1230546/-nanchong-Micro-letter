import {Component, OnInit} from '@angular/core';
export class LocalStorage {

  public localStorage:any;


  public tokens:any = '3ED4259F753D1210F3111B2C0EAA681EAB81CEB94B75D7C3F222DB2EDF4853B2';
  public token:any;
  public encodedToken:any;
  constructor() {

    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
    this.setObject("logincache",this.tokens);
    this.token= this.getObject("logincache");

    this.encodedToken=encodeURIComponent("token="+this.token);

  }
  public set(key:string, value:string):void {
    this.localStorage[key] = value;
  }
  public get(key:string):string {
    return this.localStorage[key] || false;
  }

  public setObject(key:string, value:any):void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getObject(key:string):any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key:string):any {
    this.localStorage.removeItem(key);
  }

  OnInit(){
  }
}
// export const LOCAL_STORAGE_PROVIDERS:any[] = [
//         Provider(LocalStorage, {useClass: LocalStorage})
// ];
