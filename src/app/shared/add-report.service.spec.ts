import { TestBed } from '@angular/core/testing';

import { AddReportService } from './add-report.service';

describe('AddReportService', () => {
  let service: AddReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
