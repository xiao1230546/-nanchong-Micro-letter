import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmtorderComponent } from './submtorder.component';

describe('SubmtorderComponent', () => {
  let component: SubmtorderComponent;
  let fixture: ComponentFixture<SubmtorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmtorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmtorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
