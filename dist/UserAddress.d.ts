import { ZoneEntity } from "./Location";
export interface UserAddress {
    id: number;
    zone: ZoneEntity;
    details: String;
}
export declare class UserAddressEntity implements UserAddress {
    id: number;
    zone: ZoneEntity;
    details: String;
    constructor(id: number, zone: ZoneEntity, details: String);
}
export interface NewUserAddressRequest {
    userId: number;
    zoneId: number;
    details: string;
}
export declare class NewUserAddressRequestEntity implements NewUserAddressRequest {
    userId: number;
    zoneId: number;
    details: string;
    constructor(userId: number, zoneId: number, details: string);
}
export interface UpdateUserAddressRequest {
    id: number;
    details: string;
}
export declare class UpdateUserAddressRequestEntity implements UpdateUserAddressRequest {
    id: number;
    details: string;
    constructor(id: number, details: string);
}
