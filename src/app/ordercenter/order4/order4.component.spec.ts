import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order4Component } from './order4.component';

describe('Order4Component', () => {
  let component: Order4Component;
  let fixture: ComponentFixture<Order4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
