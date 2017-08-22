import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradenameComponent } from './tradename.component';

describe('TradenameComponent', () => {
  let component: TradenameComponent;
  let fixture: ComponentFixture<TradenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
