import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersaComponent } from './layersa.component';

describe('LayersaComponent', () => {
  let component: LayersaComponent;
  let fixture: ComponentFixture<LayersaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
