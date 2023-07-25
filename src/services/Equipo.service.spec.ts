
import { TestBed } from '@angular/core/testing';

import { EquipoService } from './Equipo.service';

describe('EquipoService', () => {
  let service: EquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});