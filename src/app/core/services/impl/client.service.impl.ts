import { Injectable } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientCreate, ClientFormCommande, ClientListe } from '../../models/client.liste';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceImpl implements ClientService {
         private apiUrl=`${environment.APIURL}/clients`
         constructor(private http:HttpClient) {  }
  
          findByTelephone(tel: string): Observable<RestResponse<ClientListe >> {
             return  this.http.get<RestResponse<ClientListe>>(`${this.apiUrl}/telephone/${tel}`) 
          }

         create(clientCreate: ClientCreate): Observable<RestResponse<ClientCreate>> {
           return  this.http.post<RestResponse<ClientCreate>>(`${this.apiUrl}`,clientCreate)
         }
 
       findAll(page:number=0,keyword:string=""):Observable<RestResponse<ClientListe[]>>  {
        return  this.http.get<RestResponse<ClientListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
      }

}
