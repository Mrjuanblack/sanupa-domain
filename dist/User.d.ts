import { PartnerInfoEntity, SimplePartnerInfoEntity } from "./PartnerInfo";
export declare enum LoginErrors {
    InvalidPassword = 1,
    NoVerifiedPhone = 2,
    Inactive = 3
}
export declare enum CCType {
    CC = 1,
    NIT = 2,
    PA = 3,
    CE = 4
}
export declare const CCTypeList: CCType[];
export declare function getCCTypeString(ccType: CCType): string;
export declare enum UserRole {
    User = 1,
    Admin = 2,
    Partner = 3,
    PhotoAssistant = 4,
    Verifier = 5
}
export declare function getUserRoleString(role: UserRole): string;
export interface User {
    id: number;
    name: string;
    lastName: string | null;
    email: string | null;
    ccType: CCType | null;
    cc: string | null;
    phoneNumber: string;
    password: string;
    role: UserRole;
    active: boolean;
    partnerInfo: PartnerInfoEntity | null;
}
export interface UserMetadata {
    id: number;
    name: string;
    lastName: string | null;
    email: string | null;
    ccType: CCType | null;
    cc: string | null;
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
    partnerInfo: SimplePartnerInfoEntity;
}
export declare class SimpleUser_WithPartnerInfoEntity implements SimpleUser_WithPartnerInfo {
    id: number;
    name: string;
    partnerInfo: SimplePartnerInfoEntity;
    constructor(id: number, name: string, partnerInfo: SimplePartnerInfoEntity);
}
export declare function isUserCookie(o: any): o is UserMetadata;
export interface NewUserRequest {
    name: string;
    phoneNumber: string;
    password: string;
}
export interface UpdateFacturationInfoRequest {
    name: string;
    lastName: string;
    ccType: CCType;
    cc: string;
    email: string;
}
export declare class UpdateFacturationInfoRequestEntity implements UpdateFacturationInfoRequest {
    name: string;
    lastName: string;
    ccType: CCType;
    cc: string;
    email: string;
    constructor(name: string, lastName: string, ccType: CCType, cc: string, email: string);
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
    lastName: string | null;
    email: string | null;
    ccType: CCType | null;
    cc: string | null;
    phoneNumber: string;
    password: string;
    role: UserRole;
    active: boolean;
    partnerInfo: PartnerInfoEntity | null;
    constructor(id: number, name: string, lastName: string | null, email: string | null, ccType: CCType | null, cc: string | null, phoneNumber: string, password: string, role: UserRole, active: boolean, partnerInfo: PartnerInfoEntity | null);
}
export interface UpdatePasswordRequest {
    oldPassword: string;
    password: string;
}
export declare class UpdatePasswordRequestEntity implements UpdatePasswordRequest {
    oldPassword: string;
    password: string;
    constructor(oldPassword: string, password: string);
}
export interface UpdatePhoneNumberRequest {
    phoneNumber: string;
}
export declare class UpdatePhoneNumberRequestEntity implements UpdatePhoneNumberRequest {
    phoneNumber: string;
    constructor(phoneNumber: string);
}
export interface UpdateIdentificationRequest {
    ccType: CCType;
    cc: string;
}
export declare class UpdateIdentificationRequestEntity implements UpdateIdentificationRequest {
    ccType: CCType;
    cc: string;
    constructor(ccType: CCType, cc: string);
}
export interface UpdateEmailRequest {
    email: string;
}
export declare class UpdateEmailRequestEntity implements UpdateEmailRequest {
    email: string;
    constructor(email: string);
}
export interface UpdateNamesRequest {
    name: string;
    lastName: string;
}
export declare class UpdateNamesRequestEntity implements UpdateNamesRequest {
    name: string;
    lastName: string;
    constructor(name: string, lastName: string);
}
export interface ResetPasswordRequest {
    newPassword: string;
    code: string;
}
