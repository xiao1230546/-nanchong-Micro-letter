import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInComponent } from './no-in.component';

describe('NoInComponent', () => {
  let component: NoInComponent;
  let fixture: ComponentFixture<NoInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
