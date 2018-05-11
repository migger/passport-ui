import { TestBed, inject } from '@angular/core/testing';

import { ChangeStateEventEmitterService } from './change-state-event-emitter.service';

describe('ChangeStateEventEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeStateEventEmitterService]
    });
  });

  it('should be created', inject([ChangeStateEventEmitterService], (service: ChangeStateEventEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
