import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCardListComponent } from './get-card-list.component';

describe('GetCardListComponent', () => {
  let component: GetCardListComponent;
  let fixture: ComponentFixture<GetCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
