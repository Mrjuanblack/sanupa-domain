import { ZoneEntity } from "./Location";
export interface UserAddress {
    id: number;
    zone: ZoneEntity;
    details: String;
    active: boolean;
}
export declare class UserAddressEntity implements UserAddress {
    id: number;
    zone: ZoneEntity;
    details: String;
    active: boolean;
    constructor(id: number, zone: ZoneEntity, details: String, active: boolean);
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
