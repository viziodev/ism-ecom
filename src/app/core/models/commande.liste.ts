

 export default interface CommandeListe {
    id: number
   dateComd: string,
   montant: number,
   etat: EtatCommande.Encours,
   etatSuivant: EtatCommande.Terminer,
   adresse: Adresse

}
export enum EtatCommande{
    Encours, Terminer
}
export interface Adresse {
    quartier: string,
    ville: string,
     numVilla: string
}
export  interface CommandeCreate{
    articlesPanier?: unknown[] | undefined;
    total?: number | null | undefined;
    client?: Partial<{
        id: any;
        nomComplet: null;
        telephone: string | null;
        adresseComplet: null;
    }> | undefined;
}

