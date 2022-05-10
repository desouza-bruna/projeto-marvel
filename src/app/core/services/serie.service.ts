import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root',
})
export class SerieService {
  private publicKey = environment.publicKey;
  private pivateKey = environment.privateKey;
  private apiMarvel = environment.apiMarvel;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  time = Number(new Date());
  hash = Md5.hashAsciiStr(this.time + this.pivateKey + this.publicKey);

  constructor(private http: HttpClient) {}

  fetchSeries(): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(
        `series?ts=${this.time}&apikey=${this.publicKey}&hash=${this.hash}`
      ),

      this.httpOptions
    );
  }
}
