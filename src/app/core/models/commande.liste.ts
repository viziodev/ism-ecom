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
