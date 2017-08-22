import { Component, OnInit } from '@angular/core';
import {getPost} from "../../post"
import {ToastComponent} from "../../layer/toast/toast.component"
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'app-save-org',
  templateUrl: './save-org.component.html',
  styleUrls: ['./save-org.component.css']
})
export class SaveOrgComponent implements OnInit {
  public loadingoff:boolean;
  constructor(
    private getpost:getPost,
    private toast:ToastComponent,
    private  router:Router,
  ) { }
  ngOnInit() {
    this.loadingoff = true;
    //服务器需要参数
    let parameter={
    };
    this.getpost.privateurl ='/OrgInfo/GetOrgBaseInfo';  //服务器接口地址
    //请求方式
    this.getpost.Myget(parameter)
      .then(res=>{
        if(res.Code == 100){
          this.loadingoff = false;
          //0=未提交审核 2=审核中 3=审核成功 4=审核失败
          if(res.Data.Status == 3){
            this.router.navigate(['./searchpro']);

          }else {
            this.toast.createMessage('info','您的商家信息，正在完善中');
          }
        }else {
          this.loadingoff = false;
          this.toast.createMessage('info',res.Desc);

        }
      })
  }

  enter(){

  }

}
