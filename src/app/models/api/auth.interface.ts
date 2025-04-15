export interface NonceResponse {
    status: string
    message: string,
    data: {
        message: string,
        nonce: number
    }
}

export interface ValidateSignatureResponse {
    status: string
    message: string,
    data: {
        token: string,
        registeredUser: boolean
    }
}

export interface RegisterRequest {
    wallet: string,
    name: string,
    email: string
}