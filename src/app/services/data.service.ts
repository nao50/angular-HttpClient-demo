import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'assets/data.json';

  constructor(
    private http: HttpClient,
  ) { }

  getDataResponse(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.dataUrl, { observe: 'response' })
    .pipe(
      retry(3),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

}
