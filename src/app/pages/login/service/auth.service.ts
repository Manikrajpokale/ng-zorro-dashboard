import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstants } from '../../../core/Constants/URLconstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string; rememberMe: boolean;}): Observable<any> {
    return this.http.post(URLConstants.endpoints.LOGIN, credentials);
  } 
}
