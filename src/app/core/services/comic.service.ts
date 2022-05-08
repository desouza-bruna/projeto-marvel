import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  private publicKey = environment.publicKey;
  private apiMarvel = environment.apiMarvel;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  fetchComics(): Observable<any> {
    return this.http.get<any>(
      this.apiMarvel.concat(
        'comics?limit=40&apikey=' + this.publicKey
      ),
      this.httpOptions
    );
  }
}
