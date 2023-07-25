
import { TestBed } from '@angular/core/testing';

import { PuestosService } from './Puestos.service';

describe('PuestosService', () => {
  let service: PuestosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuestosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});