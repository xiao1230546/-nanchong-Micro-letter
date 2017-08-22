import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardPayComponent } from './member-card-pay.component';

describe('MemberCardPayComponent', () => {
  let component: MemberCardPayComponent;
  let fixture: ComponentFixture<MemberCardPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCardPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
