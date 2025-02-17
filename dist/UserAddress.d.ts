import { ZoneEntity } from "./Location";
export interface UserAddress {
    zone: ZoneEntity;
    details: String;
}
export declare class UserAddressEntity implements UserAddress {
    zone: ZoneEntity;
    details: String;
    constructor(zone: ZoneEntity, details: String);
}
export interface NewUserAddressRequest {
    userId: number;
    zoneId: number;
    details: string;
}
export declare class NewUserAddressRequestEntity {
    constructor(userId: number, zoneId: number, details: string);
}
export interface UpdateUserAddressRequest {
    userId: number;
    details: string;
}
export declare class UpdateUserAddressRequestEntity {
    constructor(userId: number, details: string);
}
