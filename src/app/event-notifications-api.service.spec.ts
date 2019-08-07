import { TestBed } from '@angular/core/testing';

import { EventNotificationsApiService } from './event-notifications-api.service';

describe('EventNotificationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventNotificationsApiService = TestBed.get(EventNotificationsApiService);
    expect(service).toBeTruthy();
  });
});
