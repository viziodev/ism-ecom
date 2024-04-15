import { Observable } from "rxjs";

import { RestResponse } from "../models/rest.response";
import { ArticleCatalogue, ArticleFormCommande } from "../models/article.models";

export interface ArticleService {
   
    findByLibelle(libelle:string):Observable<RestResponse<ArticleFormCommande>>;
    findAll():Observable<RestResponse<ArticleCatalogue[]>>;
    findById(id:number):Observable<RestResponse<ArticleCatalogue>>;


}
