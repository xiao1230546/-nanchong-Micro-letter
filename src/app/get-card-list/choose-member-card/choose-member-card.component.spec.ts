import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMemberCardComponent } from './choose-member-card.component';

describe('ChooseMemberCardComponent', () => {
  let component: ChooseMemberCardComponent;
  let fixture: ComponentFixture<ChooseMemberCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMemberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
