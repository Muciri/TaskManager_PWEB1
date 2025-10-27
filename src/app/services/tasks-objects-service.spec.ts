import { TestBed } from '@angular/core/testing';

import { TasksObjectsService } from './tasks-objects-service';

describe('TasksObjectsService', () => {
  let service: TasksObjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksObjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
