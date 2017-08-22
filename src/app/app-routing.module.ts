import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {CompanyprofileComponent} from "./homepagev/companyprofile/companyprofile.component";
import {SearchComponent} from "./nearbyshops/search/search.component";
import {RegisterComponent} from "./homepagev/register/register.component";
import {VerifyComponent} from "./homepagev/verify/verify.component";
import {BindingComponent} from "./binding/binding.component";
import {SetpasswordComponent} from "./binding/setpassword/setpassword.component";
import {PasswordComponent} from "./binding/password/password.component";
import {PublicinformationComponent} from "./binding/publicinformation/publicinformation.component";

import {MembercenterComponent} from "./member-center/membercenter/membercenter.component";
import {OrdercenterComponent} from "./ordercenter/ordercenter.component";
import {Order1Component} from "./ordercenter/order1/order1.component";
import {Order2Component} from "./ordercenter/order2/order2.component";
import {Order3Component} from "./ordercenter/order3/order3.component";
import {Order4Component} from "./ordercenter/order4/order4.component";

import {SaveOrgComponent} from "./merchant-center/save-org/save-org.component";
import {SearchProductComponent} from "./merchant-center/search-product/search-product.component";
import {EditGoodsComponent} from "./merchant-center/edit-goods/edit-goods.component";
import {GdmapComponent} from "./gdmap/gdmap.component";

import {MerchantStoreComponent} from "./nearbyshops/merchant-store/merchant-store.component";

const routes:Routes = [
  // children:[]
  //4个主导航
  {path:'company',component:CompanyprofileComponent},  //公司简介
  {path:'search',component:SearchComponent},  //附近商家
  {path:'member',component:RegisterComponent}, //会员中心  //未注册
  {path:'saveorg',component:SaveOrgComponent},  //入驻商家中心

  // 组件相互跳转
  {path:'verify/:phone/:name',component:VerifyComponent},  //手机验证码
  {path:'binding',component:BindingComponent},  //会员卡绑定中心
  {path:'setpassword/:id',component:SetpasswordComponent},    //我没有会员卡

  {path:'password',component:PasswordComponent},     //设置密码

  {path:'map',component:GdmapComponent},     //地图大

  {path:'publins',component:PublicinformationComponent}, //个人中心

  {path:'memter',component:MembercenterComponent}, //会员中心  //已注册

  {path:'searchpro',component:SearchProductComponent}, //商家中心  //商品管理

  {path:'editgoods',component:EditGoodsComponent}, //商家中心  //添加商品


  {path:'merchantstore',component:MerchantStoreComponent},// 搜索商家

  {path:'ordercenter',component:OrdercenterComponent,    //订单中心
    children:[
      {path:'',component:Order1Component},
      {path:'order1',component:Order1Component},
      {path:'order2',component:Order2Component},
      {path:'order3',component:Order3Component},
      {path:'order4',component:Order4Component}
    ]
  }


];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
