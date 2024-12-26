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

export function isUserCookie(o: any): o is UserCookie {
    return (
        typeof o === 'object' &&
        o !== null &&
        'id' in o &&
        typeof o.id === 'number' &&
        'name' in o &&
        typeof o.name === 'string' &&
        'email' in o &&
        typeof o.email === 'string' &&
        'phoneNumber' in o &&
        typeof o.phoneNumber === 'string'
    );
}

export interface NewUserRequest {
    name: string
    phoneNumber: string
    password: string
}

export interface LoginRequest {
    phoneNumber: string
    password: string
}

export class UserEntity implements User {
    constructor(public id: number, public name: string, public email: string|null, public phoneNumber: string, public password: string) {}
}