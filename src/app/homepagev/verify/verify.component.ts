import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getPost} from "../../post"
import "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
//引入Localstorage组件
import {LocalStorage} from "../../../core/localstorage"
//公用方法
import { UnitServer} from '../../services/unit.server';

import {ToastComponent} from "../../layer/toast/toast.component"

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  public phones:number;
  public names:string;
  public loadingoff:boolean =false;

  constructor(private routerInfo:ActivatedRoute,
              private  router:Router,
              private unitServer:UnitServer,
              private ls:LocalStorage,
              private getpost:getPost,
              private toast:ToastComponent


  ) {
  }
  gain(){
    // 获取验证码get
    this.unitServer.Djs("#phoens");
    this.loadingoff = true;
    //服务器需要参数
    let parameter={
      Phone:this.phones,
      Type:11
    };
    this.getpost.privateurl ='/Common/GetSmsCode';  //服务器接口地址
    //请求方式
    this.getpost.Myget(parameter)
      .then(res=>{
        if(res.Code == 100){
          this.loadingoff = false;
          this.toast.createMessage('success',res.Desc);

        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);

        }
      })

  }

  confirm(code){   //确定
    this.loadingoff = true;
    let parameter = {
      UserName:this.names,
      Phone:this.phones,
      Code:code
    };

    this.getpost.privateurl ='/UserInfo/BindTel';
    this.getpost.Mypost(parameter)
      .then(res=>{
        if(res.Code == 100){
          this.loadingoff = false;
          this.router.navigate(['./password']);

        }else {
          //console.log(res.Desc);
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);

        }
      })
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params:Params)=>{
      this.phones=params['phone'];
      this.names=params['name'];

    });
  }
  // localStorage四种方法：
  // localStorage.getItem(key):获取指定key本地存储的值
  // localStorage.setItem(key,value)：将value存储到key字段
  // localStorage.removeItem(key):删除指定key本地存储的值
  // localStorage.length是localStorage的项目数

}
