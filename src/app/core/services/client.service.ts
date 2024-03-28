import { Observable } from "rxjs";
import { ClientCreate, ClientListe } from "../models/client";
import { RestResponse } from "../models/rest.response";
import { ArticlePanier } from "../models/article.model";

export interface ClientService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClientListe[]>>;
    create(clientModel: ClientCreate):Observable<RestResponse<ClientCreate>>
    findById(id:number):Observable<RestResponse<ClientListe>>
    findByIdArticle(id:number):Observable<RestResponse<ArticlePanier>>
}
