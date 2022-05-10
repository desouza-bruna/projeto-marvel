import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private publicKey = environment.publicKey;
  private apiMarvel = environment.apiMarvel;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  search(keyWord: string, url: string): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(url + keyWord + '&apikey=' + this.publicKey),
      this.httpOptions
    );
  }
}
