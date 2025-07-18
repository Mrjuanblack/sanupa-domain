import { PartnerInfoEntity, SimplePartnerInfoEntity } from "./PartnerInfo";

export function calculateBlockedTime(loginTries: number, blockedDate: Date): Date | null {
    if(loginTries >= 3) {
        const helper = loginTries - 2;
        // Add 5 minutes for each try
        const blockedUntil = new Date(blockedDate);
        blockedUntil.setMinutes(blockedUntil.getMinutes() + (helper * 5));
        return blockedUntil;
    }
    return null;
}

export enum LoginErrors {
    InvalidPassword = 1,
    NoVerifiedPhone = 2,
    Inactive = 3,
    Blocked = 4
}

export interface BlockedTimeResult {
    blockedDate: Date | null,
    blockedUntil: Date | null
}

export enum CCType {
    CC = 1,
    NIT = 2,
    PA = 3,
    CE = 4,
}
export const CCTypeList = Object.values(CCType).filter(value => typeof value === 'number');
export function getCCTypeString(ccType: CCType): string {
    switch (ccType) {
        case CCType.CC:
            return "CC";
        case CCType.NIT:
            return "NIT";
        case CCType.PA:
            return "PA";
        case CCType.CE:
            return "CE";
    }
}

export enum UserRole {
    User = 1,
    Admin = 2,
    Partner = 3,
    PhotoAssistant = 4,
    Verifier = 5
}

export enum AdditionalRole {
    Delivery = 1
}

// TODO: Add field for user img

type UserRoleEnumToStringMap = {
    [key in UserRole]: string;
};

const userRoleEnumToString: UserRoleEnumToStringMap = {
    [UserRole.User]: 'Usuario',
    [UserRole.Admin]: 'Administrador',
    [UserRole.Partner]: 'Socio',
    [UserRole.PhotoAssistant]: 'Asistente de Fotos',
    [UserRole.Verifier]: 'Verificador'
}

export function getUserRoleString(role: UserRole) {
    return userRoleEnumToString[role];
}

export interface User {
    id: number
    name: string
    lastName: string | null
    email: string | null
    ccType: CCType | null
    cc: string | null
    phoneNumber: string
    password: string
    role: UserRole
    additionalRoles: AdditionalRole[]
    active: boolean

    partnerInfo: PartnerInfoEntity | null
    loginTries: number
    blockedDate: Date | null
    blockedUntil: Date | null
}


// Excludes password
export interface UserMetadata {
    id: number
    name: string
    lastName: string | null
    email: string | null
    ccType: CCType | null
    cc: string | null
    phoneNumber: string
    role: UserRole
    additionalRoles: AdditionalRole[]
}

export interface UpdatePermissions {
    id: number
    allowedSubcategoriesId: number[]
}

export interface SimpleUser {
    id: number,
    name: string
}

export class SimpleUserEntity implements SimpleUser {
    constructor(
        public id: number,
        public name: string
    ) { }
}

export interface SimpleUser_WithPartnerInfo extends SimpleUser {
    partnerInfo: SimplePartnerInfoEntity
}

export class SimpleUser_WithPartnerInfoEntity implements SimpleUser_WithPartnerInfo {
    constructor(
        public id: number,
        public name: string,
        public partnerInfo: SimplePartnerInfoEntity
    ) { }
}

export interface SimpleUser_ContactInfo extends SimpleUser {
    phoneNumber: string
}

export class SimpleUser_ContactInfoEntity implements SimpleUser_ContactInfo {
    constructor(
        public id: number,
        public name: string,
        public phoneNumber: string
    ) { }
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

export interface UpdateFacturationInfoRequest {
    name: string
    lastName: string
    ccType: CCType
    cc: string
    email: string
}

export class UpdateFacturationInfoRequestEntity implements UpdateFacturationInfoRequest {
    constructor(
        public name: string,
        public lastName: string,
        public ccType: CCType,
        public cc: string,
        public email: string,
    ) { }
}

export interface LoginRequest {
    phoneNumber: string
    password: string
}

export class UpdatePermissionsEntity implements UpdatePermissions {
    constructor(public id: number, public allowedSubcategoriesId: number[]) { }
}

export class UserEntity implements User {
    constructor(
        public id: number,
        public name: string,
        public lastName: string | null,
        public email: string | null,
        public ccType: CCType | null,
        public cc: string | null,
        public phoneNumber: string,
        public password: string,
        public role: UserRole,
        public additionalRoles: AdditionalRole[],
        public active: boolean,
        public partnerInfo: PartnerInfoEntity | null,
        public loginTries: number,
        public blockedDate: Date | null,
        public blockedUntil: Date | null
    ) { }
}

export interface UpdatePasswordRequest {
    oldPassword: string
    password: string
}

export class UpdatePasswordRequestEntity implements UpdatePasswordRequest {
    constructor(
        public oldPassword: string,
        public password: string
    ) { }
}

export interface UpdatePhoneNumberRequest {
    phoneNumber: string
}

export class UpdatePhoneNumberRequestEntity implements UpdatePhoneNumberRequest {
    constructor(
        public phoneNumber: string
    ) { }
}

export interface UpdateIdentificationRequest {
    ccType: CCType
    cc: string
}

export class UpdateIdentificationRequestEntity implements UpdateIdentificationRequest {
    constructor(
        public ccType: CCType,
        public cc: string
    ) { }
}

export interface UpdateEmailRequest {
    email: string
}

export class UpdateEmailRequestEntity implements UpdateEmailRequest {
    constructor(
        public email: string
    ) { }
}

export interface UpdateNamesRequest {
    name: string
    lastName: string
}

export class UpdateNamesRequestEntity implements UpdateNamesRequest {
    constructor(
        public name: string,
        public lastName: string
    ) { }
}

export interface ResetPasswordRequest {
    newPassword: string
    code: number
}

export interface FetchDeliveryUsersByNameRequest {
    name: string
}