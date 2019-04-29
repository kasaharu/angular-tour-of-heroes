import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
