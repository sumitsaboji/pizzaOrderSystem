import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(auth: any) {
    const url = this.baseUrl  +   environment.auth.register;
    return this.http.post(url, auth);
  }

  login(auth: any): Observable<any> {
    const url = this.baseUrl  +   environment.auth.login;
    return this.http.post(url, auth);
  }

}
