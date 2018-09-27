import { TestBed, inject } from '@angular/core/testing';

import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivatorService]
    });
  });

  it('should be created', inject([EventRouteActivatorService], (service: EventRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
