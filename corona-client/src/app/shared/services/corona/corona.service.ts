import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Summary} from '@models/summaryData';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  private nationForm: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient) { }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>('api/summary').pipe(
      map(data => data));
  }

  createNationForm(): FormGroup {
    this.nationForm  = this.fb.group({
      country: ['', Validators.required],
    });
    return this.nationForm;
  }

}
