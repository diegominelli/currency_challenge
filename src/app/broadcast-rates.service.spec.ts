import { TestBed } from '@angular/core/testing';

import { BroadcastRatesService } from './broadcast-rates.service';

describe('BroadcastRatesService', () => {
  let service: BroadcastRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
