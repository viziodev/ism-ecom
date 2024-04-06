import { Injectable } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { ArticleCatalogue, ArticleFormCommande } from '../../models/article.models';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceImpl implements ArticleService {

   private apiUrl=`${environment.APIURL}/articles`
         constructor(private http:HttpClient) {  }
  
  
        findByLibelle(libelle: string): Observable<RestResponse<ArticleFormCommande>> {
          console.log(`${this.apiUrl}/libelle/${libelle}`);
          
          return  this.http.get<RestResponse<ArticleFormCommande>>(`${this.apiUrl}/libelle/${libelle}`) 
        }

        findAll(): Observable<RestResponse<ArticleCatalogue[]>> {
             return  this.http.get<RestResponse<ArticleCatalogue[]>>(`${this.apiUrl}`)
        }

        findById(id: number): Observable<RestResponse<ArticleCatalogue>> {
          return  this.http.get<RestResponse<ArticleCatalogue>>(`${this.apiUrl}/${id}`)
        }
}
