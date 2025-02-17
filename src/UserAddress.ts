import { ZoneEntity } from "./Location";

export interface UserAddress {
    id: number
    zone: ZoneEntity
    details: String
}

export class UserAddressEntity implements UserAddress {
    constructor(
        public id: number,
        public zone: ZoneEntity,
        public details: String
    ) { }
}

export interface NewUserAddressRequest {
    userId: number,
    zoneId: number,
    details: string
}

export class NewUserAddressRequestEntity implements NewUserAddressRequest {
    constructor(
        public userId: number,
        public zoneId: number,
        public details: string
    ) { }
}

export interface UpdateUserAddressRequest {
    id: number
    details: string
}

export class UpdateUserAddressRequestEntity implements UpdateUserAddressRequest {
    constructor(
        public id: number,
        public details: string
    ) { }
}