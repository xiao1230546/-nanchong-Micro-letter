import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardPaysComponent } from './member-card-pays.component';

describe('MemberCardPaysComponent', () => {
  let component: MemberCardPaysComponent;
  let fixture: ComponentFixture<MemberCardPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCardPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
