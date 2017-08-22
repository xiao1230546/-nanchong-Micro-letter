import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicinformationComponent } from './publicinformation.component';

describe('PublicinformationComponent', () => {
  let component: PublicinformationComponent;
  let fixture: ComponentFixture<PublicinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
