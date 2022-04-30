import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  private tmpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.tmpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('this.tmpHeader', this.tmpHeader);
    request = request.clone({
      headers: this.tmpHeader,
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event.status);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        type ErrorData = {
          reason: string;
          status: number;
        };
        let data = {} as ErrorData;
        let res: Response;
        data = {
          reason:
            error && error.error && error.error.reason
              ? error.error.reason
              : '',
          status: error.status,
        };
        console.log('my error', data['reason']);
        return throwError(error);
      })
    );
  }
}
