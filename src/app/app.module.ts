import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module"
import { RegisterComponent } from './homepagev/register/register.component';
import { HeadlineComponent } from './homepagev/headline/headline.component';
import { VerifyComponent } from './homepagev/verify/verify.component';
import { SetpasswordComponent } from './binding/setpassword/setpassword.component';
import { BindingComponent } from './binding/binding.component';
import { PasswordComponent } from './binding/password/password.component';
import { CompanyprofileComponent } from './homepagev/companyprofile/companyprofile.component';
import { PublicinformationComponent } from './binding/publicinformation/publicinformation.component';
import { LayersComponent } from './binding/layers/layers.component';
import { NearbyshopsComponent } from './nearbyshops/nearbyshops.component';
import { BaidumapComponent } from './nearbyshops/baidumap/baidumap.component';
import { BaiduMapModule } from 'angular2-baidu-map';
import { SearchComponent } from './nearbyshops/search/search.component';
import { SearchboxComponent } from './nearbyshops/searchbox/searchbox.component';
import { BusinesslistingsComponent } from './nearbyshops/businesslistings/businesslistings.component';
import { TradenameComponent } from './nearbyshops/tradename/tradename.component';
import { CommoditydetailsComponent } from './nearbyshops/commoditydetails/commoditydetails.component';
import { LayersaComponent } from './nearbyshops/layersa/layersa.component';
import { SubmtorderComponent } from './nearbyshops/submtorder/submtorder.component';
import { SiteComponent } from './nearbyshops/site/site.component';
import { SelectaddressComponent } from './nearbyshops/site/selectaddress/selectaddress.component';
import { MerchantStoreComponent } from './nearbyshops/merchant-store/merchant-store.component';


import { MemberCenterComponent } from './member-center/member-center.component';
import { MembercenterComponent } from './member-center/membercenter/membercenter.component';
import { MymembershipcardComponent } from './member-center/mymembershipcard/mymembershipcard.component';
import { CashComponent } from './member-center/cash/cash.component';
import { ArriveComponent } from './member-center/arrive/arrive.component';
import { DeleteComponent } from './member-center/delete/delete.component';
import { UnitServer } from './services/unit.server';
import {HttpModule} from "@angular/http";
import {LocalStorage} from "../core/localstorage";
import { MemberCardPayComponent } from './get-card-list/member-card-pay/member-card-pay.component';
import { OrdercenterComponent } from './ordercenter/ordercenter.component';
import { Order3Component } from './ordercenter/order3/order3.component';
import { Order4Component } from './ordercenter/order4/order4.component';
import { Order2Component } from './ordercenter/order2/order2.component';
import { Order1Component } from './ordercenter/order1/order1.component';
import { GetCardListComponent } from './get-card-list/get-card-list.component';
import { ChooseMemberCardComponent } from './get-card-list/choose-member-card/choose-member-card.component';
import { EditPopBuyCountComponent } from './get-card-list/edit-pop-buy-count/edit-pop-buy-count.component';
import { GatheringComponent } from './get-card-list/gathering/gathering.component';
import { GatheringTwoDimensionCodeComponent } from './get-card-list/gathering-two-dimension-code/gathering-two-dimension-code.component';
import { MemberCardGatheringComponent } from './get-card-list/member-card-gathering/member-card-gathering.component';
import { MemberCardGatheringPayComponent } from './get-card-list/member-card-gathering-pay/member-card-gathering-pay.component';
import { MemberCardPaysComponent } from './get-card-list/member-card-pays/member-card-pays.component';
import { PaySuccessComponent } from './get-card-list/pay-success/pay-success.component';
import { BusinessCenterComponent } from './get-org-info/business-center/business-center.component';
import { PostListComponent } from './get-org-info/business-center/post-list/post-list.component';
import { DealEndComponent } from './get-org-info/business-center/deal-end/deal-end.component';
import { NoInComponent } from './get-org-info/business-center/no-in/no-in.component';
import { NoOutComponent } from './get-org-info/business-center/no-out/no-out.component';
import { NoPayComponent } from './get-org-info/business-center/no-pay/no-pay.component';
import { BusinessInformationComponent } from './get-org-info/business-center/business-information/business-information.component';
import { EditGoodsComponent } from './merchant-center/edit-goods/edit-goods.component';
import { SaveOrgComponent } from './merchant-center/save-org/save-org.component';
import { SearchProductComponent } from './merchant-center/search-product/search-product.component';
import { SettledDataComponent } from './merchant-center/settled-data/settled-data.component'

import {getPost} from "./post"
import { NzDemoSpinTipComponent } from './layer/loading/loading.component';
import { ToastComponent } from './layer/toast/toast.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SectComponent } from './ordercenter/sect/sect.component';

import {ShopDetailsComponents} from "./get-nearby-merchant-list/shop-details/shop-details.component";
import { GdmapComponent } from './gdmap/gdmap.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeadlineComponent,
    VerifyComponent,
    SetpasswordComponent,
    BindingComponent,
    PasswordComponent,
    CompanyprofileComponent,
    PublicinformationComponent,
    LayersComponent,
    NearbyshopsComponent,
    BaidumapComponent,
    SearchComponent,
    SearchboxComponent,
    BusinesslistingsComponent,
    TradenameComponent,
    CommoditydetailsComponent,
    LayersaComponent,
    SubmtorderComponent,
    SiteComponent,
    SelectaddressComponent,
    MerchantStoreComponent,

    MemberCenterComponent,
    MembercenterComponent,
    MymembershipcardComponent,
    CashComponent,
    ArriveComponent,
    DeleteComponent,
    MemberCardPayComponent,
    OrdercenterComponent,
    Order3Component,
    Order4Component,
    Order2Component,
    Order1Component,
    GetCardListComponent,
    ChooseMemberCardComponent,
    EditPopBuyCountComponent,
    GatheringComponent,
    GatheringTwoDimensionCodeComponent,
    MemberCardGatheringComponent,
    MemberCardGatheringPayComponent,
    MemberCardPaysComponent,
    PaySuccessComponent,
    BusinessCenterComponent,
    PostListComponent,
    DealEndComponent,
    NoInComponent,
    NoOutComponent,
    NoPayComponent,
    BusinessInformationComponent,
    EditGoodsComponent,
    SaveOrgComponent,
    SearchProductComponent,
    SettledDataComponent,
    NzDemoSpinTipComponent,
    ToastComponent,
    SectComponent,
    ShopDetailsComponents,
    GdmapComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BaiduMapModule,
    HttpModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    UnitServer,
    LocalStorage,
    getPost,
    ToastComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
