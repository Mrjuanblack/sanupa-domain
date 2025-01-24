export declare enum UserRole {
    User = 1,
    Admin = 2,
    Partner = 3
}
export declare function getUserRoleString(role: UserRole): string;
export interface User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
    role: UserRole;
}
export interface UserMetadata {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    role: UserRole;
}
export interface UpdateUserRequest {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    role: UserRole;
    allowedSubcategories: number[] | null;
}
export interface SimpleUser {
    id: number;
    name: string;
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
export declare class UpdateUserRequestEntity implements UpdateUserRequest {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    role: UserRole;
    allowedSubcategories: number[] | null;
    constructor(id: number, name: string, email: string | null, phoneNumber: string, role: UserRole, allowedSubcategories: number[] | null);
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
    role: UserRole;
    constructor(id: number, name: string, email: string | null, phoneNumber: string, password: string, role: UserRole);
}
