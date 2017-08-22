import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectComponent } from './sect.component';

describe('SectComponent', () => {
  let component: SectComponent;
  let fixture: ComponentFixture<SectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
