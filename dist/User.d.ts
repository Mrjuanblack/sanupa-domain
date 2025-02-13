import { PartnerInfoEntity } from "./PartnerInfo";
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
    partnerInfo: PartnerInfoEntity | null;
}
export interface UserMetadata {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    role: UserRole;
}
export interface UpdatePermissions {
    id: number;
    allowedSubcategoriesId: number[];
}
export interface SimpleUser {
    id: number;
    name: string;
}
export declare class SimpleUserEntity implements SimpleUser {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
export interface SimpleUser_WithPartnerInfo extends SimpleUser {
    partnerInfo: PartnerInfoEntity | null;
}
export declare class SimpleUser_WithPartnerInfoEntity implements SimpleUser_WithPartnerInfo {
    id: number;
    name: string;
    partnerInfo: PartnerInfoEntity | null;
    constructor(id: number, name: string, partnerInfo: PartnerInfoEntity | null);
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
export declare class UpdatePermissionsEntity implements UpdatePermissions {
    id: number;
    allowedSubcategoriesId: number[];
    constructor(id: number, allowedSubcategoriesId: number[]);
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string;
    password: string;
    role: UserRole;
    partnerInfo: PartnerInfoEntity | null;
    constructor(id: number, name: string, email: string | null, phoneNumber: string, password: string, role: UserRole, partnerInfo: PartnerInfoEntity | null);
}
