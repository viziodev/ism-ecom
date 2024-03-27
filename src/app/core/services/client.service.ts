import { Observable } from "rxjs";
import { ClientCreate, ClientListe } from "../models/client";
import { RestResponse } from "../models/rest.response";

export interface ClientService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClientListe[]>>;
    create(clientModel: ClientCreate):Observable<RestResponse<ClientCreate>>
}
