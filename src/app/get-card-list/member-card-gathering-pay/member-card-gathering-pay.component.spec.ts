import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardGatheringPayComponent } from './member-card-gathering-pay.component';

describe('MemberCardGatheringPayComponent', () => {
  let component: MemberCardGatheringPayComponent;
  let fixture: ComponentFixture<MemberCardGatheringPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCardGatheringPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardGatheringPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
