import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  protected apiUrl: string = environment.apiUrl;
  // protected apiUrl: string = "https://cspec.com";
  // protected apiUrl: string = "http://127.0.0.1:8080";

  constructor(protected http: HttpClient) {
  }
}
