import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReportResponseComponent } from './add-report-response.component';

describe('AddReportResponseComponent', () => {
  let component: AddReportResponseComponent;
  let fixture: ComponentFixture<AddReportResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReportResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReportResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
