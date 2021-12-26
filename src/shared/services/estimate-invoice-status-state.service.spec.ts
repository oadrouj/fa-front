/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstimateInvoiceStatusStateService } from './estimate-invoice-status-state.service';

describe('Service: EstimateInvoiceStatusState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstimateInvoiceStatusStateService]
    });
  });

  it('should ...', inject([EstimateInvoiceStatusStateService], (service: EstimateInvoiceStatusStateService) => {
    expect(service).toBeTruthy();
  }));
});
