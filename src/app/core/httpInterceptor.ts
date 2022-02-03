import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const startTime = new Date().getTime();

    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
            const endTime = new Date().getTime();
            console.log(
                ` Status : ${response.status}, time: ${startTime - endTime}`
            );
        }
      })
    );
  }
}
