import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiURL = 'https://my-json-server.typicode.com/esley/demo/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}
