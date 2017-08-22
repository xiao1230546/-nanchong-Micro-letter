import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrls: ['./order1.component.css']
})
export class Order1Component implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }
  gopay(){
    this.router.navigate(['./editgoods']);
  }
}
