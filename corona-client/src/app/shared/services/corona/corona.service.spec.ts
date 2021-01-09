import { TestBed } from '@angular/core/testing';
import {CoronaService} from './corona.service';
import {PrimengModule} from '@shared/primeng.module';
import {FormBuilder, FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CoronaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      FormsModule,
      PrimengModule
    ],
    providers: [FormBuilder]
  }));

  it('should be created', () => {
    const service: CoronaService = TestBed.get(CoronaService);
    expect(service).toBeTruthy();
  });
});
