import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";
import { RegisterResponse } from "../models/api/auth.interface";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly url = "/api/auth"
    private http = inject(HttpClient);
    private localStorageService = inject(LocalStorageService);

    public register(id: string, wallet: string) {
      this.http.post<RegisterResponse>(`${this.url}/register`, { id, wallet }).subscribe({
          next: (res) => {
            this.localStorageService.saveToken(res.data.token); // save token in local storage
          },
          error: (err) => {
              console.error(err);
          }
      })
    }

    public update(name?: string, email?: string): Observable<any> {
      const body: { name?: string, email?: string } = { };
      if (name !== "") {
        body.name = name;
      }
      if (email !== "") {
        body.email = email;
      }

      return this.http.put(`${this.url}/user`, body).pipe(
          tap({
              error: (err) => {
                  console.error(err);
              }
          })
      );
    }
}