import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {getPost} from "../post"; (getPost);
import {ToastComponent} from "../layer/toast/toast.component"
@Component({
  selector: 'app-ordercenter',
  templateUrl: './ordercenter.component.html',
  styleUrls: ['./ordercenter.component.css']
})
export class OrdercenterComponent implements OnInit {
  public off:boolean =true;
  public loadingoff:boolean =false;
  constructor(
    private router:Router,
    private getpost:getPost,
    private toast:ToastComponent
  ) { }

  ngOnInit() {
    this.getdin(1)
  }
  getdin(type){
    this.off =true;
    this.loadingoff=true;
    let parameter={
      Type:type,
      PageIndex:1,
      PageSize:20
    };
    this.getpost.privateurl ='/UserOrder/GetPostOrderList';  //服务器接口地址
    //请求方式
    this.getpost.Myget(parameter)
      .then(res=>{
        console.log(res);
        if(res.Code == 100){
          this.loadingoff = false;
        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);

        }
      })
  }
  check(checkid){
    switch(checkid){
      case 0 :
        //待付款
        this.off =true;
        this.getdin(1)
        break;
      case 1 :
        //待发货
        this.getdin(2)
        break;
      case 2 :  //
        //待收货
        this.getdin(3)
        break;
      default:
        this.getdin(4)
        //交易结束

    }
  }
}
