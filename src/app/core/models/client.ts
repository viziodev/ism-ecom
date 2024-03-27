export interface ClientListe {
       id: number,
       nomComplet: string,
       telephone:  string,
       quartier:  string,
       numVilla:  string,
       adresseComplet:  string
}

export interface ClientCreate {
        id?: number,
        nomComplet: string,
        telephone:  string,
        quartier:  string,
        ville:      string,
        numVilla:  string,
        username:  string,
        password:  string,
}

