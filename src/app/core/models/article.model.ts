import { ClientListe } from "./client";

export interface ArticlePanier {
     idArticle:number;
     libelle:string;
     montant:number;
     quantite:number;
     quantiteStock:number;
     prix:number;

}
export interface Panier {
     articlesPanier:ArticlePanier[] ;
     total:number;
     client:ClientListe;  
}





