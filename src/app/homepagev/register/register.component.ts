import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UnitServer} from "../../services/unit.server";
import {ToastComponent} from "../../layer/toast/toast.component"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public phone:number;
  public name:string;
  constructor(private  router:Router,
              private unitServer:UnitServer,
              private toast:ToastComponent
  ) { }
  gain(phoe,name){
     if(this.unitServer.off == true){
       this.name = name;
       this.phone = phoe;
       if(this.name != "" ){
         this.router.navigate(['./verify',this.phone,this.name]);
       }else {

         this.toast.createMessage('info','用户名不能为空');
       }
     }else {

       this.toast.createMessage('info','手机号码有误');
     }
  }
  gainphoe(phone){
    if(phone == ""){

      this.toast.createMessage('info','手机号码不能为空');
    }else {
      this.unitServer.checkPhone("#phonea");
    }
  }
  gainphoes(name){
    if(name == ""){
      this.toast.createMessage('info','用户名不能为空');
    }
  }

  ngOnInit() {


  }

}
