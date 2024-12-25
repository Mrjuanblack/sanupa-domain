export interface User {
    id: string
    name: string
    email: string
}

export class UserEntity implements User {
    constructor(public id: string, public name: string, public email: string) {}
}