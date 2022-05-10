import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private publicKey = environment.publicKey;
  private pivateKey = environment.privateKey;
  private apiMarvel = environment.apiMarvel;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  time = Number(new Date());
  hash = Md5.hashAsciiStr(this.time + this.pivateKey + this.publicKey);

  constructor(private http: HttpClient) {}

  search(keyWord: string, url: string): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(
        `${url}${keyWord}&ts=${this.time}&apikey=${this.publicKey}&hash=${this.hash}`
      ),
      this.httpOptions
    );
  }
}
