import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditydetailsComponent } from './commoditydetails.component';

describe('CommoditydetailsComponent', () => {
  let component: CommoditydetailsComponent;
  let fixture: ComponentFixture<CommoditydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoditydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoditydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
