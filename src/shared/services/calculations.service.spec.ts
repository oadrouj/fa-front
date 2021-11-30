/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculationsService } from './calculations.service';

describe('Service: Calculations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationsService]
    });
  });

  it('should ...', inject([CalculationsService], (service: CalculationsService) => {
    expect(service).toBeTruthy();
  }));
});
