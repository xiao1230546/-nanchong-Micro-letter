import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {getPost} from "../../post"; (getPost);
import {ToastComponent} from "../../layer/toast/toast.component"
@Component({
  selector: 'app-membercenter',
  templateUrl: './membercenter.component.html',
  styleUrls: ['./membercenter.component.css']
})
export class MembercenterComponent implements OnInit {
  public loadingoff:boolean =false;
  public UserName:string;
  public UserCode:any;
  public Avatar:any;
  public Phone:number;
  public Balance:number;

  constructor(
    private router:Router,
    private getpost:getPost,
    private toast:ToastComponent
  ) { }
  ngOnInit() {
    this.loadingoff=true;
    let parameter={
    };
    this.getpost.privateurl ='/UserInfo/GetIndex';  //服务器接口地址
    //请求方式
    this.getpost.Myget(parameter)
      .then(res=>{
        if(res.Code == 100){

          if(res.Data.Status == 0){//未注册
            this.router.navigate(['./member']);
          }else {
            this.loadingoff = false;
            this.UserCode = res.Data.UserCode; //用户编号
            this.Avatar = res.Data.Avatar;  //用户头像
            this.UserName = res.Data.UserName;  // 用户名
            this.Phone = res.Data.Phone;    //用户手机
            this.Balance =res.Data.Balance; //用户余额
          }
        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);

        }
      })

  }
  skip(cen){
    switch(cen){
      case 0 :
        //跳转我的余额组件
        //this.router.navigate(['./binding']);
        break;
      case 1 :   //待付款
        this.router.navigate(['./ordercenter/order1']);
        break;
      case 2 :  //待发货
        this.router.navigate(['./ordercenter/order2']);
        break;
      case 3 :  //待收货
        this.router.navigate(['./ordercenter/order3']);
        break;
      case 4 :  //交易结束
        this.router.navigate(['./ordercenter/order4']);
        break;
      case 5 :  //我的资料
        this.router.navigate(['./ordercenter/publins']);
        break;
      case 6 :  //会员卡

        this.router.navigate(['./choosemembercard']);


        break;
      case 7 :  //到店消费
        this.router.navigate(['./binding']);
        break;
      default:   //现金流水
        this.router.navigate(['./binding']);

    }
  }
}
