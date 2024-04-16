import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';
import { AuthentificationRequest, TokenResponse } from '../../models/login.model';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {
    isAuthentificated=true;
    private apiUrl=`${environment.APIURL}`
         constructor(private http:HttpClient) {  }
    login(data: AuthentificationRequest): Observable<RestResponse<TokenResponse>> {
      return this.http.post<RestResponse<TokenResponse>>(`${this.apiUrl}/login`, data);
    }

   
  

}
