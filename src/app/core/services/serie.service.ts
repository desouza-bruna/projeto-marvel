import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  private publicKey = environment.publicKey;
  private apiMarvel = environment.apiMarvel;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  fetchSeries(): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat('series?apikey=' + this.publicKey),
      this.httpOptions
    );
  }
}
