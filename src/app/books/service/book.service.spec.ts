import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let injector: TestBed;
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    injector = getTestBed();
    service = injector.get(BookService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
