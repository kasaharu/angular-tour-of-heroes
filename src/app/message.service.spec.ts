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

  it('call add() method', () => {
    service.messages = [];
    service.add('test');

    expect(service.messages).toEqual(['test']);
  });

  it('call clear() method', () => {
    service.messages = ['test'];
    service.clear();

    expect(service.messages).toEqual([]);
  });
});
