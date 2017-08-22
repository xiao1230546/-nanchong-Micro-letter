import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatheringTwoDimensionCodeComponent } from './gathering-two-dimension-code.component';

describe('GatheringTwoDimensionCodeComponent', () => {
  let component: GatheringTwoDimensionCodeComponent;
  let fixture: ComponentFixture<GatheringTwoDimensionCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatheringTwoDimensionCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatheringTwoDimensionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
