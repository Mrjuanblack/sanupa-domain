import { ZoneEntity } from "./Location";
export interface PartnerWorkingZone {
    zone: ZoneEntity;
    price: number;
}
export declare class PartnerWorkingZoneEntity implements PartnerWorkingZone {
    zone: ZoneEntity;
    price: number;
    constructor(zone: ZoneEntity, price: number);
}
export interface NewPartnerWorkingZone {
    partnerId: number;
    zoneId: number;
    price: number;
}
export declare class NewPartnerWorkingZoneEntity implements NewPartnerWorkingZone {
    partnerId: number;
    zoneId: number;
    price: number;
    constructor(partnerId: number, zoneId: number, price: number);
}
