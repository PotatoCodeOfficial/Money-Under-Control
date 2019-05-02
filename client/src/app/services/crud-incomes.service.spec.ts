import { TestBed } from '@angular/core/testing';

import { CrudIncomesService } from './crud-incomes.service';

describe('CrudIncomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudIncomesService = TestBed.get(CrudIncomesService);
    expect(service).toBeTruthy();
  });
});
