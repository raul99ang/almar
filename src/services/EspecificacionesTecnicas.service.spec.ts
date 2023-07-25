
import { TestBed } from '@angular/core/testing';

import { EspecificacionesTecnicasService } from './EspecificacionesTecnicas.service';

describe('EspecificacionesTecnicasService', () => {
  let service: EspecificacionesTecnicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecificacionesTecnicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});