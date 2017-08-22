import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStoreComponent } from './merchant-store.component';

describe('MerchantStoreComponent', () => {
  let component: MerchantStoreComponent;
  let fixture: ComponentFixture<MerchantStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
