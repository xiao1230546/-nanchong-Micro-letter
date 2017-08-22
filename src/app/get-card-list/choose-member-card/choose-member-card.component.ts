import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {getPost} from "../../post"; (getPost);
import {ToastComponent} from "../../layer/toast/toast.component"
@Component({
  selector: 'app-choose-member-card',
  templateUrl: './choose-member-card.component.html',
  styleUrls: ['./choose-member-card.component.css']
})
export class ChooseMemberCardComponent implements OnInit {
  private loadingoff:boolean =false;
  private CardCode:any;
  private CardNo:any;
  private Balances:any;
  constructor(
    private router:Router,
    private getpost:getPost,
    private toast:ToastComponent
  ) { }

  ngOnInit() {
    this.loadingoff=true;
    let parameter={
    };
    this.getpost.privateurl ='/UserCard/GetCardList';  //服务器接口地址
    //请求方式
    this.getpost.Myget(parameter)
      .then(res=>{
        console.log(res);
        if(res.Code == 100){
          // this.router.navigate(['./member']);
          this.loadingoff = false;
          this.CardCode = res.Data.CardCode; //编号（唯一标识）
          this.CardNo = res.Data.CardNo;  //会员卡号
          this.Balances = res.Data.Balance;  // 余额

        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);
        }
      })
      .catch(()=>{
        this.loadingoff = false;
      });
  }

}
