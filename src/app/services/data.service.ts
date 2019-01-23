import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of, timer, interval } from 'rxjs';
import { catchError, retryWhen, timeout } from 'rxjs/operators';

import { Data, ChartData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'assets/data.json';
  chartDataUrl = 'assets/chartdata.json';

  constructor(
    private http: HttpClient,
  ) { }

  getDataResponse(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.dataUrl, { observe: 'response' })
    .pipe(
      timeout(2500),
      catchError(this.handleError),
    );
  }

  getChartDataResponse(): Observable<HttpResponse<ChartData[]>> {
    return this.http.get<ChartData[]>(this.chartDataUrl, { observe: 'response' })
    .pipe(
      timeout(2500),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log('error: ', error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
      );
  }

}
