export interface AuthentificationRequest {
    username:string
    password:string
}

export interface TokenResponse {
    username:string
    roles:string[]
    token:string
}
