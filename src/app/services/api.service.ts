import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000'; 

  constructor(private http: HttpClient) {}

  getApiData() {
    const fastApi = `${this.apiUrl}/v1/v_meteo?__limit=1&__order=-ts`; 
    return this.http.get(fastApi);
  }

  getLogMetar() {
    const logMetar= `${this.apiUrl}/v1/logmetar?__limit=100&__order=-ts`;
    return this.http.get(logMetar)
  }

  getLogRvr() {
    const logRvr = `${this.apiUrl}/v1/logrvrmor?__limit=100&__order=-ts`;
    return this.http.get(logRvr)
  }


}
