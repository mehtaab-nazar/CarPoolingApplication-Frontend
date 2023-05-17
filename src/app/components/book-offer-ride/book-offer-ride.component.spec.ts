import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfferRideComponent } from './book-offer-ride.component';

describe('BookRideComponent', () => {
  let component: BookOfferRideComponent;
  let fixture: ComponentFixture<BookOfferRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOfferRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOfferRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
