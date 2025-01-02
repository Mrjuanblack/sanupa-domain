export declare enum UserRole {
    User = 1,
    Admin = 2
}
export interface User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
}
export interface UserMetadata {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    role: UserRole;
}
export declare function isUserCookie(o: any): o is UserMetadata;
export interface NewUserRequest {
    name: string;
    phoneNumber: string;
    password: string;
}
export interface LoginRequest {
    phoneNumber: string;
    password: string;
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
    constructor(id: number, name: string, email: string | null, phoneNumber: string, password: string);
}
