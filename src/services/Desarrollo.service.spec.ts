
import { TestBed } from '@angular/core/testing';

import { DesarrolloService } from './Desarrollo.service';

describe('DesarrolloService', () => {
  let service: DesarrolloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesarrolloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});