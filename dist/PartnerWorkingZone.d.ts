import { PartnerWorking_City, PartnerWorking_Community, PartnerWorking_Region, PartnerWorking_Zone, PartnerWorkingDay } from "api-loc-domain";
export declare class PartnerWorking_ZoneEntity implements PartnerWorking_Zone {
    price: number;
    zoneId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, zoneId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
export declare class NewPartnerWorking_ZoneEntity implements PartnerWorking_Zone {
    price: number;
    zoneId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, zoneId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
export declare class PartnerWorking_CommunityEntity implements PartnerWorking_Community {
    price: number;
    leadTime: number;
    partnerId: number;
    communityId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, leadTime: number, partnerId: number, communityId: number, days: PartnerWorkingDay[]);
}
export declare class NewPartnerWorking_CommunityEntity implements PartnerWorking_Community {
    price: number;
    leadTime: number;
    partnerId: number;
    communityId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, leadTime: number, partnerId: number, communityId: number, days: PartnerWorkingDay[]);
}
export declare class PartnerWorking_CityEntity implements PartnerWorking_City {
    price: number;
    cityId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, cityId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
export declare class NewPartnerWorking_CityEntity implements PartnerWorking_City {
    price: number;
    cityId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, cityId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
export declare class PartnerWorking_RegionEntity implements PartnerWorking_Region {
    price: number;
    regionId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, regionId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
export declare class NewPartnerWorking_RegionEntity implements PartnerWorking_Region {
    price: number;
    regionId: number;
    leadTime: number;
    partnerId: number;
    days: PartnerWorkingDay[];
    constructor(price: number, regionId: number, leadTime: number, partnerId: number, days: PartnerWorkingDay[]);
}
