import { Observable } from "rxjs";
import { ClientListe } from "../models/client.liste";
import { RestResponse } from "../models/rest.response";

export interface ClientService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClientListe[]>>;
}
