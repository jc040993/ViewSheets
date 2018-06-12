import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private httpClient: HttpClient) { }

  getJSON (url: string): Observable<any[]> {
    return this.httpClient.get<any[]>(url);
  }
}
