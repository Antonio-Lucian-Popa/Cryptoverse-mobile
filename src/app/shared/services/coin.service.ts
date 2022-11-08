import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  COIN_API = 'https://coinranking1.p.rapidapi.com';

  cryptoApiHeaders = new HttpHeaders({
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3f1f7dd1e0mshfa460d0bba8564bp12bcc9jsnd35c4557e331',
  });

  constructor(private http: HttpClient) { }

  getCryptos(count: any): Observable<any> {
    return this.http.get<any>(`${this.COIN_API}/coins?limit=${count}`, {headers: this.cryptoApiHeaders});
  }

  getCryptoDetails(coinId: any): Observable<any> {
    return this.http.get<any>(`${this.COIN_API}/coin/${coinId}`, {headers: this.cryptoApiHeaders});
  }

  getCryptoHistory(coinId: any, timeperiod: any): Observable<any> {
    return this.http.get<any>(`${this.COIN_API}/coin/${coinId}/history?timeperiod=${timeperiod}`, {headers: this.cryptoApiHeaders});
  }

  // Note: To access this endpoint you need premium plan
  getExchanges(): Observable<any> {
    return this.http.get<any>(`${this.COIN_API}/exchanges`, {headers: this.cryptoApiHeaders});
  }
}
