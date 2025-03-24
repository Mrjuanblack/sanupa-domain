import { City, Community, ZoneEntity } from "./Location";

export interface PartnerWorking_Zone {
    zone: ZoneEntity
    price: number
}

export class PartnerWorking_ZoneEntity implements PartnerWorking_Zone {
    constructor(
        public zone: ZoneEntity,
        public price: number
    ) { }
}

export interface NewPartnerWorking_Zone {
    partnerId: number
    zoneId: number
    price: number
}

export class NewPartnerWorking_ZoneEntity implements NewPartnerWorking_Zone {
    constructor(
        public partnerId: number,
        public zoneId: number,
        public price: number
    ) { }
}

export interface PartnerWorking_Community {
    community: Community
    price: number
}

export class PartnerWorking_CommunityEntity implements PartnerWorking_Community {
    constructor(
        public community: Community,
        public price: number
    ) { }
}

export interface NewPartnerWorking_Community {
    partnerId: number
    communityId: number
    price: number
}

export class NewPartnerWorking_CommunityEntity implements NewPartnerWorking_Community {
    constructor(
        public partnerId: number,
        public communityId: number,
        public price: number
    ) { }
}

export interface PartnerWorking_City {
    city: City
    price: number
}

export class PartnerWorking_CityEntity implements PartnerWorking_City {
    constructor(
        public city: City,
        public price: number
    ) { }
}

export interface NewPartnerWorking_City {
    partnerId: number
    cityId: number
    price: number
}

export class NewPartnerWorking_CityEntity implements NewPartnerWorking_City {
    constructor(
        public partnerId: number,
        public cityId: number,
        public price: number
    ) { }
}