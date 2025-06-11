import { City, Community, ZoneEntity } from "./Location";

export interface DeliveryWorking_Zone {
    zone: ZoneEntity
}

export class DeliveryWorking_ZoneEntity implements DeliveryWorking_Zone {
    constructor(
        public zone: ZoneEntity
    ) { }
}

export interface NewDeliveryWorking_Zone {
    partnerId: number
    zoneId: number
}

export class NewDeliveryWorking_ZoneEntity implements NewDeliveryWorking_Zone {
    constructor(
        public partnerId: number,
        public zoneId: number
    ) { }
}

export interface DeliveryWorking_Community {
    community: Community
}

export class DeliveryWorking_CommunityEntity implements DeliveryWorking_Community {
    constructor(
        public community: Community,
    ) { }
}

export interface NewDeliveryWorking_Community {
    partnerId: number
    communityId: number
}

export class NewDeliveryWorking_CommunityEntity implements NewDeliveryWorking_Community {
    constructor(
        public partnerId: number,
        public communityId: number
    ) { }
}

export interface DeliveryWorking_City {
    city: City
}

export class DeliveryWorking_CityEntity implements DeliveryWorking_City {
    constructor(
        public city: City
    ) { }
}

export interface NewDeliveryWorking_City {
    partnerId: number
    cityId: number
}

export class NewDeliveryWorking_CityEntity implements NewDeliveryWorking_City {
    constructor(
        public partnerId: number,
        public cityId: number
    ) { }
}