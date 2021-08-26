import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRestaurantsComponent } from './details-restaurants.component';

describe('DetailsRestaurantsComponent', () => {
  let component: DetailsRestaurantsComponent;
  let fixture: ComponentFixture<DetailsRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
