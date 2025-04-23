import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterModalService } from "./register-modal.service";
import { LocalStorageService } from "./local-storage.service";
import { RegisterResponse } from "../models/api/auth.interface";

@Injectable({
    providedIn: 'root'
})
export class User {
    private readonly url = "/api/auth"
    private http = inject(HttpClient);
    private registerModalService = inject(RegisterModalService);
    private localStorageService = inject(LocalStorageService);

    public register(id: string, wallet: string) {
      this.http.post<RegisterResponse>(`${this.url}/register`, { id, wallet }).subscribe({
          next: (res) => {
            this.localStorageService.removeToken(); // remove token from local storage
            this.localStorageService.saveToken(res.data.token); // save token in local storage
          },
          error: (err) => {
              console.error(err);
          }
      })
    }

    public update(name?: string, email?: string) {
      const body: { name?: string, email?: string } = { };
      if (name !== "") {
        body.name = name;
      }
      if (email !== "") {
        body.email = email;
      }

      this.http.put(`${this.url}/user`, body).subscribe({
          next: (res) => {
              this.registerModalService.clearError();
              this.registerModalService.closeModal(); // Close the modal after successful update
          },
          error: (err) => {
              console.error(err);
              this.registerModalService.setError(err.error.message); // Set error message in the modal service
          }
      })
    }
}