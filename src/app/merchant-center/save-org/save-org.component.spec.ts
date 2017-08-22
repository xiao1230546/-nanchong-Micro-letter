import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOrgComponent } from './save-org.component';

describe('SaveOrgComponent', () => {
  let component: SaveOrgComponent;
  let fixture: ComponentFixture<SaveOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
