
import { TestBed } from '@angular/core/testing';

import { RequerimientosProyectoService } from './RequerimientosProyecto.service';

describe('RequerimientosProyectoService', () => {
  let service: RequerimientosProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimientosProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});