import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {getPost} from "../post"
import {ToastComponent} from "../layer/toast/toast.component"


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public id:number;
  public loadingoff:boolean =false;
  constructor(
    private router:Router,
    private getpost:getPost,
    private toast:ToastComponent

  ) { }

  ngOnInit() {
  }

  binding(cardnumber,password){  //绑定会员卡
    if(cardnumber != "" || password !=""){
      let parameter = {
        CardNo:cardnumber,
        Password:password
      };
      this.loadingoff = true;
      this.getpost.privateurl ='/UserCard/BindCard';
      this.getpost.Mypost(parameter)
        .then(res=>{
          if(res.Code == 100){
            this.loadingoff = false;
            this.router.navigate(['./publins']);
          }else {
            this.loadingoff = false;
            this.toast.createMessage('info',res.Desc);
          }
        })
    }else {
      this.toast.createMessage('info','会员卡号或密码不能为空');
    }


  }
  handleError(){

  }



  nocard(){    //我没有会员卡
    let parameter = {};
    this.getpost.privateurl ='/UserCard/GenCard';
    this.loadingoff = true;
    this.getpost.Mypost(parameter)
      .then(res=>{
        if(res.Code == 100){
          this.loadingoff = false;
          this.id = res.Data.CardNo;
          this.router.navigate(['./setpassword',this.id]); //请求成功跳转路由 把id带过去
        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);
        }
      })
      .catch(()=>{
        this.loadingoff = false;
      })
  }

  setpassword(){
    this.router.navigate(['./password']); //设置密码组件
  }




}
