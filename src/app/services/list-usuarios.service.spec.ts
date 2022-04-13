import { TestBed } from '@angular/core/testing';

import { ListUsuariosService } from './list-usuarios.service';

describe('ListUsuariosService', () => {
  let service: ListUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
