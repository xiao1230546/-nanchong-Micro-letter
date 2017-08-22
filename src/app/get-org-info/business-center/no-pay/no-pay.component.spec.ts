import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPayComponent } from './no-pay.component';

describe('NoPayComponent', () => {
  let component: NoPayComponent;
  let fixture: ComponentFixture<NoPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
