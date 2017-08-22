import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettledDataComponent } from './settled-data.component';

describe('SettledDataComponent', () => {
  let component: SettledDataComponent;
  let fixture: ComponentFixture<SettledDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettledDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettledDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
