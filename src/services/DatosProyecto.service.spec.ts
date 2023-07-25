
import { TestBed } from '@angular/core/testing';

import { DatosProyectoService } from './DatosProyecto.service';

describe('DatosProyectoService', () => {
  let service: DatosProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});