import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTransactions } from '../../models/api/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private http = inject(HttpClient);
  readonly url = 'https://block-explorer-api.testnet.abs.xyz/api?'

  public getTransaction(): Observable<UserTransactions> {
    const timestamp = new Date().getTime(); // Para evitar cache
    const fullUrl = `${this.url}module=account&action=txlist&page=1&offset=100&sort=desc&endblock=99999999&startblock=0&address=0x3cBE18fE24F227f542B44191385A55Df11d39D06&_=${timestamp}`;
  
    return this.http.get<UserTransactions>(fullUrl, {
      headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
    });
  }

  public getBlocks(): Observable<any> {
    return this.http.get('https://eth.blockscout.com/api/v2/blocks?type=block',)
  }

  constructor() { }
}
