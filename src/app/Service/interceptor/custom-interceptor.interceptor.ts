import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CustomInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called for',request);

    // -------------directly we cannot access request.url because it is read only
    // request.url = 'https://jsonplaceholder.typicode.com/posts';

    const newreq = request.clone(
     { 
       url:('https://jsonplaceholder.typicode.com/posts/'+request.url),
       headers:request.headers.set('Autherization','Testing header')
    
    }
    )
    return next.handle(newreq);
  }
}
