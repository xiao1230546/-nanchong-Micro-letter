import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealEndComponent } from './deal-end.component';

describe('DealEndComponent', () => {
  let component: DealEndComponent;
  let fixture: ComponentFixture<DealEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
