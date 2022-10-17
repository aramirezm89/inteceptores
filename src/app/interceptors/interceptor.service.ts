import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    let params = new HttpParams()
      .append('page', '2')
      .append('nombre', 'Antonio Ramirez');

    let headers = new HttpHeaders().append('x-token', 'asdfajdklfjadj87987');

    const reqClone = req.clone({
      headers,
      params,
    });
    console.log('paso por el interceptor');

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => 'Error mandado por throwError rxjs');
  }
}
