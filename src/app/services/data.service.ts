import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';

import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Day } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private location: PlatformLocation) {}

  /**
   * @param dataset select dataset from 1 to 7
   * @returns observable of requested dataset
   */
  loadData(dataset = 1): Observable<{ buckets: [Day] }> {
    return this.http
      .get(
        location.origin +
          '/assets/dataset' +
          dataset +
          '.json?d=' +
          new Date().toISOString()
      )
      .pipe(
        map((data) => data as { buckets: [Day] }),
        catchError((err) => {
          return throwError('Could not load data');
        })
      );
  }
}
