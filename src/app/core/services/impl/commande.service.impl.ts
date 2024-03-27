import { Injectable } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientListe } from '../../models/client';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandeService } from '../commande.service ';
import CommandeListe from '../../models/commande.liste';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceImpl implements CommandeService {
         private apiUrl=`${environment.APIURL}/commandes`
         constructor(private http:HttpClient) {  }
          findAll(page: number=0,idClient:string | null): Observable<RestResponse<CommandeListe[]>> {
             //commandes/client/2
               const url:string=idClient=="all"
                                           ?`${this.apiUrl}?page=${page}`
                                           :`${this.apiUrl}/client/${idClient}?page=${page}`
               return this.http.get<RestResponse<CommandeListe[]>>(url)
         }
  
  
}
