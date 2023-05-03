import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOfferComponent } from './program-offer.component';

describe('ProgramOfferComponent', () => {
  let component: ProgramOfferComponent;
  let fixture: ComponentFixture<ProgramOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
