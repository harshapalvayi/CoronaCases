import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Summary} from '@models/summaryData';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>('api/summary').pipe(
      map(data => data));
  }
}
