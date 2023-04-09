import { TestBed } from '@angular/core/testing';

import { DatoserviceService } from './datoservice.service';

describe('DatoserviceService', () => {
  let service: DatoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
