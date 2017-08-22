import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";
declare var $;
@Injectable()
export class UnitServer {
  public off:boolean = false;
  constructor(

  ){}

  getHS(){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    // application/json
    // application/x-www-form-urlencoded
    return header
  }

  Djs(obj) {  //短信发送
      $(obj).attr("disabled", "disabled");
      let num = 60;
      let cont = setInterval(function () {
      num--;
      $(obj).val(num + '秒后重发');
      if (num == 0) {
        $(obj).val('重新获取');
        clearInterval(cont);
        $(obj).removeAttr("disabled");
      }
    }, 1000)
  }

  checkPhone(obj){
    let phone = $(obj).val();
    if(!(/^1[34578]\d{9}$/.test(phone))){
      // util.showToast("手机号码有误，请重填");
      this.off =false;
      return false;
    }else {
      this.off =true;
    }
  }


  // let header = new Headers();
  // header.append('Content-Type', 'application/x-www-form-urlencoded');

}
