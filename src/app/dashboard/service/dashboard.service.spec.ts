import { TestBed, async, inject, getTestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
describe('DashboardService', () => {
  let injector: TestBed;
  let service: DashboardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService],
    });

    injector = getTestBed();
    service = injector.get(DashboardService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
