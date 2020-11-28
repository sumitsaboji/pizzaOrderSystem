import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomisePizzaComponent } from './customise-pizza.component';

describe('CustomisePizzaComponent', () => {
  let component: CustomisePizzaComponent;
  let fixture: ComponentFixture<CustomisePizzaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomisePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomisePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
