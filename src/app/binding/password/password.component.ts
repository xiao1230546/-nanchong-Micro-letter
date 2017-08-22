import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getPost} from "../../post"

import {ToastComponent} from "../../layer/toast/toast.component"
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public loadingoff:boolean =false;
  constructor(
    private  router:Router,
    private getpost:getPost,
    private toast:ToastComponent
  ) { }
  ngOnInit() {
  }
  skip(card,password,passwords){
    if(password != passwords){
      this.toast.createMessage('info','两次密码输入不一致');
    }else{
      let parameter = {
        CardNo:card,
        Password:password
      };
      this.getpost.privateurl ='/UserCard/SetCardPwd';
      this.loadingoff = true;
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
        .catch((err)=>{
          this.loadingoff = false;
        });
    }
  }
}
