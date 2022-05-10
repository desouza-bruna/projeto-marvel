import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private publicKey = environment.publicKey;
  private pivateKey = environment.privateKey;
  private apiMarvel = environment.apiMarvel;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  time = Number(new Date());
  hash = Md5.hashAsciiStr(this.time + this.pivateKey + this.publicKey);

  constructor(private http: HttpClient) {}

  fetchCaracters(): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(
        `characters?ts=${this.time}&apikey=${this.publicKey}&hash=${this.hash}&limit=50&orderBy=-name`
      ),
      this.httpOptions
    );
  }
}
