import { Injectable } from '@angular/core';
import {Headers,Http} from "@angular/http";

import {url} from "../httpUrl"
import {LocalStorage} from "../core/localstorage";
import {UnitServer} from "./services/unit.server";
declare var $;
@Injectable()
export class getPost{
  public  privateurl:string;
  constructor(
    private http:Http,
    private ls:LocalStorage,
    private unitServer:UnitServer
  ){

  }
  //post方式参数是请求数据需要带的
  Mypost(parameter:any):Promise<any>{
    let Url = `${url}${this.privateurl}?__h=${this.ls.encodedToken}`;
    let headers:Headers = this.unitServer.getHS();
    return this.http.post(Url,parameter,{headers:headers})
      .toPromise()
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }
  //get方式 参数是请求数据需要带的

  Myget(parameter:any):Promise<any>{
    let Url = `${url}${this.privateurl}?__h=${this.ls.encodedToken}`;
    for(let key in parameter){
      Url =  Url+'&'+ key +'='+ parameter[key];
    }
    return this.http.get(Url)
      .toPromise()
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }


}
