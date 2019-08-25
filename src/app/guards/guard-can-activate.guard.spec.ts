import { TestBed, async, inject } from '@angular/core/testing';

import { GuardCanActivateGuard } from './guard-can-activate.guard';

describe('GuardCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardCanActivateGuard]
    });
  });

  it('should ...', inject([GuardCanActivateGuard], (guard: GuardCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
