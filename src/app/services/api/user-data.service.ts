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
    const requisition = this.http.get<UserTransactions>(this.url + 'module=account&action=txlist&page=1&offset=10&sort=desc&endblock=99999999&startblock=0&address=0x3cBE18fE24F227f542B44191385A55Df11d39D06')
    return requisition;
  }

  constructor() { }
}
