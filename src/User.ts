export interface User {
    id: number
    name: string
    email: string | null
    phoneNumber: string
    password: string
}

// Excludes password
export interface UserCookie {
    id: number
    name: string
    email: string | null
    phoneNumber: string
}

export interface NewUserRequest {
    name: string
    phoneNumber: string
    password: string
}

export class UserEntity implements User {
    constructor(public id: number, public name: string, public email: string|null, public phoneNumber: string, public password: string) {}
}