import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdmapComponent } from './gdmap.component';

describe('GdmapComponent', () => {
  let component: GdmapComponent;
  let fixture: ComponentFixture<GdmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
