import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportResponseComponent } from './report-response.component';

describe('ReportResponseComponent', () => {
  let component: ReportResponseComponent;
  let fixture: ComponentFixture<ReportResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
