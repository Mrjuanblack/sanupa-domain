import { ZoneEntity } from "./Location";

export interface PartnerWorkingZone {
    zone: ZoneEntity
    price: number
}

export class PartnerWorkingZoneEntity implements PartnerWorkingZone {
    constructor(
        public zone: ZoneEntity,
        public price: number
    ) { }
}

export interface NewPartnerWorkingZone {
    partnerId: number
    zoneId: number
    price: number
}

export class NewPartnerWorkingZoneEntity implements NewPartnerWorkingZone {
    constructor(
        public partnerId: number,
        public zoneId: number,
        public price: number
    ) { }
}