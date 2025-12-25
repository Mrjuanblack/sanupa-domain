import {
  PartnerWorking_City,
  PartnerWorking_Community,
  PartnerWorking_Region,
  PartnerWorking_Zone,
  PartnerWorkingDay,
} from "api-loc-domain";

export class PartnerWorking_ZoneEntity implements PartnerWorking_Zone {
  constructor(
    public price: number,
    public zoneId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class NewPartnerWorking_ZoneEntity implements PartnerWorking_Zone {
  constructor(
    public price: number,
    public zoneId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class PartnerWorking_CommunityEntity
  implements PartnerWorking_Community
{
  constructor(
    public price: number,
    public leadTime: number,
    public partnerId: number,
    public communityId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class NewPartnerWorking_CommunityEntity
  implements PartnerWorking_Community
{
  constructor(
    public price: number,
    public leadTime: number,
    public partnerId: number,
    public communityId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class PartnerWorking_CityEntity implements PartnerWorking_City {
  constructor(
    public price: number,
    public cityId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class NewPartnerWorking_CityEntity implements PartnerWorking_City {
  constructor(
    public price: number,
    public cityId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class PartnerWorking_RegionEntity implements PartnerWorking_Region {
  constructor(
    public price: number,
    public regionId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}

export class NewPartnerWorking_RegionEntity implements PartnerWorking_Region {
  constructor(
    public price: number,
    public regionId: number,
    public leadTime: number,
    public partnerId: number,
    public days: PartnerWorkingDay[]
  ) {}
}
