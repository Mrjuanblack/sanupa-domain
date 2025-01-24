export enum UserRole {
    User = 1,
    Admin = 2,
    Partner = 3,
}

// TODO: Add field for user img

type UserRoleEnumToStringMap = {
    [key in UserRole]: string;
};

const userRoleEnumToString: UserRoleEnumToStringMap = {
    [UserRole.User]: 'Usuario',
    [UserRole.Admin]: 'Administrador',
    [UserRole.Partner]: 'Socio',
}

export function getUserRoleString(role: UserRole) {
    return userRoleEnumToString[role];
}

export interface User {
    id: number
    name: string
    email: string | null
    phoneNumber: string
    password: string
    role: UserRole
}


// Excludes password
export interface UserMetadata {
    id: number
    name: string
    email: string | null
    phoneNumber: string
    role: UserRole
}

export interface UpdateUserRequest {
    id: number
    name: string
    email: string | null
    phoneNumber: string | null
    role: UserRole
    allowedSubcategories: number[] | null
}

export interface SimpleUser {
    id: number,
    name: string
}

export function isUserCookie(o: any): o is UserMetadata {
    return (
        typeof o === 'object' &&
        o !== null &&
        'id' in o &&
        typeof o.id === 'number' &&
        'name' in o &&
        typeof o.name === 'string' &&
        'email' in o &&
        typeof o.email === 'string' || o.email === null &&
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

export class UpdateUserRequestEntity implements UpdateUserRequest {
    constructor(
        public id: number,
        public name: string,
        public email: string | null,
        public phoneNumber: string | null,
        public role: UserRole,
        public allowedSubcategories: number[] | null
    ) { }
}

export class UserEntity implements User {
    constructor(public id: number, public name: string, public email: string | null, public phoneNumber: string, public password: string, public role: UserRole) { }
}