import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationComponent } from './list-reservation.component';

describe('ListReservationComponent', () => {
  let component: ListReservationComponent;
  let fixture: ComponentFixture<ListReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
