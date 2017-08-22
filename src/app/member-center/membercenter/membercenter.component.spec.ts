import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembercenterComponent } from './membercenter.component';

describe('MembercenterComponent', () => {
  let component: MembercenterComponent;
  let fixture: ComponentFixture<MembercenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembercenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
