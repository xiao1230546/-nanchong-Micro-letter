import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "../../core/localstorage";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getPost} from "../post";

import {ToastComponent} from "../layer/toast/toast.component";
declare var AMap:any;
declare var $:any;
@Component({
  selector: 'app-gdmap',
  templateUrl: './gdmap.component.html',
  styleUrls: ['./gdmap.component.css']
})
export class GdmapComponent implements OnInit {
  private loadingoff:boolean =false;
  public Keys:any;
  private geolocation:any;
  private map:any;
  public data:any;
  public lng:any;
  public lat:any;
  private Data:any;
  constructor(

    private getpost:getPost,
    private toast:ToastComponent,
    private router:Router,
    private ls:LocalStorage
  ) { }
  getHeight(){
    let search = $('.search').outerHeight();
    let tlia = $('.tlia').outerHeight();

    let height = $(window).height() - search - tlia;
    $(".baidumaps").css("height", height);
  }
  ngOnInit() {
    this.getHeight();
    this.map = new AMap.Map('container', {
      resizeEnable: true
    });
    this.map.plugin('AMap.Geolocation', ()=> {
      this.geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：fals
        buttonPosition:'LB'
      });
    });
    this.map.addControl(this.geolocation);
    this.geolocation.getCurrentPosition();
    AMap.event.addListener(this.geolocation, 'complete', (data)=>{
      this.lng = data.position.getLng();  //经度
      this.lat = data.position.getLat(); //纬度
      this.keyword(this.Keys);
    });//返回定位信息
    AMap.event.addListener(this.geolocation, 'error', (data)=>{
      this.toast.createMessage('info','定位失败');
    });      //返回定位出错信息
  }
  keyword(cent) {
    this.loadingoff = true;
    //服务器需要参数
    let parameter = {
      Keyword: cent,
      Lat: this.lat,
      Lng: this.lng,
      PageIndex: 1,
      PageSize: 20
    };
    this.getpost.privateurl = '/Mall/GetNearbyMerchantList'
    this.getpost.Myget(parameter)
      .then(res => {
        if (res.Code = 100) {
          this.loadingoff = false;
          this.toast.createMessage('success', res.Desc);
          //获取数据
          this.Data = res;

        } else {
          this.loadingoff = false;
          this.toast.createMessage('info', res.Desc);
        }
      })
  }
  animation(){
    this.router.navigate(['./search']);
  }
  skip(){
    this.router.navigate(['./merchantstore']);
  }
}
