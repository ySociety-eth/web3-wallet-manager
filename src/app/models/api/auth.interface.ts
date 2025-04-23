export interface NonceResponse {
    status: string
    message: string,
    data: {
        id: string,
        message: string,
        nonce: number
    }
}

export interface ValidateSignatureResponse {
    status: string
    message: string,
    data: {
        id: string,
        token: string,
        registeredUser: boolean
    }
}

export interface RegisterRequest {
    wallet: string,
    name: string,
    email: string
}

export interface RegisterResponse {
    status: string
    message: string,
    data: {
        token: string
    }
}