export interface NonceResponse {
    message: string,
    nonce: number
}

export interface ValidateSignatureResponse {
    token: string
    registeredUser: boolean
}

export interface RegisterRequest {
    wallet: string,
    name: string,
    email: string
}