import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class ApiEndpointInterceptor implements HttpInterceptor {

  intercept(
    httpRequest: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>>
  {
    const req = httpRequest.clone({
      url: `${environment.api_endpoint}${httpRequest.url}`
    });

    return next.handle( req );
  }
}
