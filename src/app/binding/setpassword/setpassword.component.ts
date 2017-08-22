import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  public ids:number;

  constructor(
    private  routerInfo:ActivatedRoute,
    private  router:Router
  ) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params:Params)=>{
      this.ids = params['id'];
      console.log(this.ids);
    })
  }

  setpassword(){
    this.router.navigate(['./password']); //设置密码组件
  }
}
