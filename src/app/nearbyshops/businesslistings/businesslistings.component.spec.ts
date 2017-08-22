import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesslistingsComponent } from './businesslistings.component';

describe('BusinesslistingsComponent', () => {
  let component: BusinesslistingsComponent;
  let fixture: ComponentFixture<BusinesslistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesslistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesslistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
