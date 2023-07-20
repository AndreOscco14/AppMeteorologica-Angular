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
}
