
import CommandeListe from "./commande.liste";


interface RestResponseCmde{
    totalItems: number,
    pages: Number[],
    totalPages: number,
    currentPage: number,
    results:CommandeListe[]
}