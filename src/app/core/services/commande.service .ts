import { Observable } from "rxjs";

import { RestResponse } from "../models/rest.response";
import CommandeListe, { CommandeCreate } from "../models/commande.liste";

export interface CommandeService {
    findAll(page:number,idClient:string | null):Observable<RestResponse<CommandeListe[]>>;
    create(clientCreate:CommandeCreate):Observable<RestResponse<CommandeCreate>>;
}
