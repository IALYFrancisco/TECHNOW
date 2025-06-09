import { TestBed } from '@angular/core/testing';

import { UserIsConnectedService } from './user-is-connected.service';

describe('UserIsConnectedService', () => {
  let service: UserIsConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIsConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
