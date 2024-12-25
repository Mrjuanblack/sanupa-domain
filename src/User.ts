export interface User {
    id: number
    name: string
    email: string
    phoneNumber: string
}

export class UserEntity implements User {
    constructor(public id: number, public name: string, public email: string, public phoneNumber: string) {}
}