export interface User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
}
export interface UserCookie {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
    constructor(id: number, name: string, email: string | null, phoneNumber: string, password: string);
}
