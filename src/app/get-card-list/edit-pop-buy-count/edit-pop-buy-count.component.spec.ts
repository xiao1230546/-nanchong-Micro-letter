import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopBuyCountComponent } from './edit-pop-buy-count.component';

describe('EditPopBuyCountComponent', () => {
  let component: EditPopBuyCountComponent;
  let fixture: ComponentFixture<EditPopBuyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPopBuyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPopBuyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
