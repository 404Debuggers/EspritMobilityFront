import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBackComponent } from './offer-back.component';
import { NgForm } from '@angular/forms';

describe('OfferBackComponent', () => {
  let component: OfferBackComponent;
  let fixture: ComponentFixture<OfferBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
