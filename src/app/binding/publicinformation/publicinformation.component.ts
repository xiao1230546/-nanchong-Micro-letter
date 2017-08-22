import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-publicinformation',
  templateUrl: './publicinformation.component.html',
  styleUrls: ['./publicinformation.component.css']
})
export class PublicinformationComponent implements OnInit {
  public off:boolean =false;
  public name:any;
  public namea:any;
  public par:any ="";
  constructor(
  ) { }
  sets(cen){
    switch(cen){
      case 0 :
        this.off = true;//显示弹层
        this.name = '拍照';
        this.namea ='从相册选择';
        break;
      case 1 :
        this.off = true;//显示弹层
        this.name = '男';
        this.namea ='女';
        break;
      case 2 :  //生日
        this.off = true;//显示弹层
        this.name = '生';
        this.namea ='日';
        break;
      default:
        this.off = true;//显示弹层
        this.name = '交通';
        this.namea ='工具';

    }

  }
  ngOnInit() {
  }

}
