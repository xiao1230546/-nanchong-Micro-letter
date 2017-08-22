import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOutComponent } from './no-out.component';

describe('NoOutComponent', () => {
  let component: NoOutComponent;
  let fixture: ComponentFixture<NoOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
