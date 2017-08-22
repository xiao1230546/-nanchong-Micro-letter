import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-spin-tip',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class NzDemoSpinTipComponent implements OnInit {
  public loadingoff:boolean =true;
  constructor() {
  }

  ngOnInit() {

  }

}

// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-loading',
//   templateUrl: './loading.component.html',
//   styleUrls: ['./loading.component.css']
// })
// export class LoadingComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
