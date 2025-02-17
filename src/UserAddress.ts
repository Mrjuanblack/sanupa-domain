import { ZoneEntity } from "./Location";

export interface UserAddress {
    zone: ZoneEntity
    details: String
}

export class UserAddressEntity implements UserAddress {
    constructor(
        public zone: ZoneEntity,
        public details: String
    ) { }
}

export interface NewUserAddressRequest {
    userId: number,
    zoneId: number,
    details: string
}

export class NewUserAddressRequestEntity {
    constructor(
        userId: number,
        zoneId: number,
        details: string
    ) { }
}

export interface UpdateUserAddressRequest {
    userId: number
    details: string
}

export class UpdateUserAddressRequestEntity {
    constructor(
        userId: number,
        details: string
    ) { }
}