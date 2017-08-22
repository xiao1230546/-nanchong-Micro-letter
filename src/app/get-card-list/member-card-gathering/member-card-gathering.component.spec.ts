import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardGatheringComponent } from './member-card-gathering.component';

describe('MemberCardGatheringComponent', () => {
  let component: MemberCardGatheringComponent;
  let fixture: ComponentFixture<MemberCardGatheringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCardGatheringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardGatheringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
