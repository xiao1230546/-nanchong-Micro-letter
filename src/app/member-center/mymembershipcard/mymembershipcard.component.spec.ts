import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymembershipcardComponent } from './mymembershipcard.component';

describe('MymembershipcardComponent', () => {
  let component: MymembershipcardComponent;
  let fixture: ComponentFixture<MymembershipcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymembershipcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymembershipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
