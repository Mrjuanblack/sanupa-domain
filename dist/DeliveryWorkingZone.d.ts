import { City, Community, ZoneEntity } from "./Location";
export interface DeliveryWorking_Zone {
    zone: ZoneEntity;
}
export declare class DeliveryWorking_ZoneEntity implements DeliveryWorking_Zone {
    zone: ZoneEntity;
    constructor(zone: ZoneEntity);
}
export interface NewDeliveryWorking_Zone {
    partnerId: number;
    zoneId: number;
}
export declare class NewDeliveryWorking_ZoneEntity implements NewDeliveryWorking_Zone {
    partnerId: number;
    zoneId: number;
    constructor(partnerId: number, zoneId: number);
}
export interface DeliveryWorking_Community {
    community: Community;
}
export declare class DeliveryWorking_CommunityEntity implements DeliveryWorking_Community {
    community: Community;
    constructor(community: Community);
}
export interface NewDeliveryWorking_Community {
    partnerId: number;
    communityId: number;
}
export declare class NewDeliveryWorking_CommunityEntity implements NewDeliveryWorking_Community {
    partnerId: number;
    communityId: number;
    constructor(partnerId: number, communityId: number);
}
export interface DeliveryWorking_City {
    city: City;
}
export declare class DeliveryWorking_CityEntity implements DeliveryWorking_City {
    city: City;
    constructor(city: City);
}
export interface NewDeliveryWorking_City {
    partnerId: number;
    cityId: number;
}
export declare class NewDeliveryWorking_CityEntity implements NewDeliveryWorking_City {
    partnerId: number;
    cityId: number;
    constructor(partnerId: number, cityId: number);
}
