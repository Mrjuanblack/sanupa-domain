import { City, Community, ZoneEntity } from "./Location";
export interface PartnerWorking_Zone {
    zone: ZoneEntity;
    price: number;
}
export declare class PartnerWorking_ZoneEntity implements PartnerWorking_Zone {
    zone: ZoneEntity;
    price: number;
    constructor(zone: ZoneEntity, price: number);
}
export interface NewPartnerWorking_Zone {
    partnerId: number;
    zoneId: number;
    price: number;
}
export declare class NewPartnerWorking_ZoneEntity implements NewPartnerWorking_Zone {
    partnerId: number;
    zoneId: number;
    price: number;
    constructor(partnerId: number, zoneId: number, price: number);
}
export interface PartnerWorking_Community {
    community: Community;
    price: number;
}
export declare class PartnerWorking_CommunityEntity implements PartnerWorking_Community {
    community: Community;
    price: number;
    constructor(community: Community, price: number);
}
export interface NewPartnerWorking_Community {
    partnerId: number;
    communityId: number;
    price: number;
}
export declare class NewPartnerWorking_CommunityEntity implements NewPartnerWorking_Community {
    partnerId: number;
    communityId: number;
    price: number;
    constructor(partnerId: number, communityId: number, price: number);
}
export interface PartnerWorking_City {
    city: City;
    price: number;
}
export declare class PartnerWorking_CityEntity implements PartnerWorking_City {
    city: City;
    price: number;
    constructor(city: City, price: number);
}
export interface NewPartnerWorking_City {
    partnerId: number;
    cityId: number;
    price: number;
}
export declare class NewPartnerWorking_CityEntity implements NewPartnerWorking_City {
    partnerId: number;
    cityId: number;
    price: number;
    constructor(partnerId: number, cityId: number, price: number);
}
