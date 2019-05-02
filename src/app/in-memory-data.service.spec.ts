import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;
  const heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call createDb() method', () => {
    expect(service.createDb()).toEqual({ heroes });
  });

  describe('call genId() method', () => {
    it('引数が hero の配列の場合', () => {
      expect(service.genId(heroes)).toBe(21);
    });

    it('引数が空配列の場合', () => {
      expect(service.genId([])).toBe(11);
    });
  });
});
