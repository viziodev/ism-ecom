export interface ArticleFormCommande {
    idArticle:number,
    libelle:string,
    montant:number,
    quantiteStock:number,
    quantite:number,
    prix:number
}

export interface ArticleCatalogue
{
     id:number;
     libelle:string;
     ancienPrix:number;
     nouveauPrix:number;
     promo:boolean;
     qteStock:number;
     photo:string;
}