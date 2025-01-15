import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AiAgentPayload, AiAgentResponse } from '../../interfaces/ai-agent.interface';


@Injectable({
  providedIn: 'root'
})
export class AiAgentApiService extends ApiBaseService {

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getAiAgentResult(payload: AiAgentPayload): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/weldapi/ai-agent`, payload);
  }
}
