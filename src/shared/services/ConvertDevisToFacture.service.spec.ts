/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertDevisToFactureService } from './ConvertDevisToFacture.service';

describe('Service: ConvertDevisToFacture', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertDevisToFactureService]
    });
  });

  it('should ...', inject([ConvertDevisToFactureService], (service: ConvertDevisToFactureService) => {
    expect(service).toBeTruthy();
  }));
});
