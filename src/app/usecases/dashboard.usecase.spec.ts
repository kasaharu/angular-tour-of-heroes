import { TestBed } from '@angular/core/testing';

import { DashboardUsecase } from './dashboard.usecase';

describe('DashboardUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardUsecase = TestBed.get(DashboardUsecase);
    expect(service).toBeTruthy();
  });
});
