import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  public title:string[];
  constructor() {}

  ngOnInit() {
    this.title = [
      "手机号注册",
      "个人资料"
    ]
  }

}
