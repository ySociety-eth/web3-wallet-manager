export interface NonceResponse {
    message: string,
    nonce: number
}

export interface ValidateSignatureResponse {
    token: string
}

export interface RegisterRequest {
    wallet: string,
    name: string,
    email: string
}