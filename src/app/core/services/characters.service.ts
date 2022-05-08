import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private publicKey = environment.publicKey;
  private apiMarvel = environment.apiMarvel;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  fetchCaracters(): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(
        'characters?limit=32&orderBy=-name&apikey=' + this.publicKey
      ),
      this.httpOptions
    );
  }

  // fetchSeries(): Observable<any> {
  //   return this.http.get<any>(
  //     this.apiMarvel.concat('comics?titleStartsWith=Avenger&apikey=' + this.publicKey),
  //     this.httpOptions
  //   );
  // }
}
