import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegPizzaComponent } from './veg-pizza.component';

describe('VegPizzaComponent', () => {
  let component: VegPizzaComponent;
  let fixture: ComponentFixture<VegPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
