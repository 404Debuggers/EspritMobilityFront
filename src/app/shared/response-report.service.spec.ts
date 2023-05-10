import { TestBed } from '@angular/core/testing';

import { ResponseReportService } from './response-report.service';

describe('ResponseReportService', () => {
  let service: ResponseReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
