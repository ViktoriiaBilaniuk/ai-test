import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AwsDOneOneBaseMetalInterface } from '../../models/aws-d-one-one-base-metal.interface';


@Injectable({
  providedIn: 'root'
})
export class AwsBaseMetalsApiService extends ApiBaseService {

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getAwsDOneOneBaseMetals(): Observable<AwsDOneOneBaseMetalInterface[]> {
    return this.http.get<AwsDOneOneBaseMetalInterface[]>(`${this.apiUrl}/weldapi/aws-d1.1-base-metals`);
  }
}
