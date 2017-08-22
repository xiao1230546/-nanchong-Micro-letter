import {Component, OnInit} from '@angular/core';
import {PublicinformationComponent} from "../publicinformation/publicinformation.component"

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})

export class LayersComponent implements OnInit {
  public name:any;
  public namea:any;

  constructor(
    private publicinformationComponent:PublicinformationComponent
  ) {

  }
  hide(){
    this.publicinformationComponent.off = false;

  }
  ngOnInit() {
    this.name = this.publicinformationComponent.name;
    this.namea = this.publicinformationComponent.namea;
  }
  selecta(par){
    switch(par){
      case '男' :
        this.publicinformationComponent.par = par;
        break;
      case '拍照' :  //生日
        // 打开照相机

        break;

    }
  }
  selectb(par){
    switch(par){
      case '女' :
        this.publicinformationComponent.par = par;
        break;
      case '从相册选择':
        // 打开相册
        break;

    }
  }
}
