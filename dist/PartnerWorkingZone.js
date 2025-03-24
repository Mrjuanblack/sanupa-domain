"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPartnerWorking_CityEntity = exports.PartnerWorking_CityEntity = exports.NewPartnerWorking_CommunityEntity = exports.PartnerWorking_CommunityEntity = exports.NewPartnerWorking_ZoneEntity = exports.PartnerWorking_ZoneEntity = void 0;
class PartnerWorking_ZoneEntity {
    constructor(zone, price) {
        this.zone = zone;
        this.price = price;
    }
}
exports.PartnerWorking_ZoneEntity = PartnerWorking_ZoneEntity;
class NewPartnerWorking_ZoneEntity {
    constructor(partnerId, zoneId, price) {
        this.partnerId = partnerId;
        this.zoneId = zoneId;
        this.price = price;
    }
}
exports.NewPartnerWorking_ZoneEntity = NewPartnerWorking_ZoneEntity;
class PartnerWorking_CommunityEntity {
    constructor(community, price) {
        this.community = community;
        this.price = price;
    }
}
exports.PartnerWorking_CommunityEntity = PartnerWorking_CommunityEntity;
class NewPartnerWorking_CommunityEntity {
    constructor(partnerId, communityId, price) {
        this.partnerId = partnerId;
        this.communityId = communityId;
        this.price = price;
    }
}
exports.NewPartnerWorking_CommunityEntity = NewPartnerWorking_CommunityEntity;
class PartnerWorking_CityEntity {
    constructor(city, price) {
        this.city = city;
        this.price = price;
    }
}
exports.PartnerWorking_CityEntity = PartnerWorking_CityEntity;
class NewPartnerWorking_CityEntity {
    constructor(partnerId, cityId, price) {
        this.partnerId = partnerId;
        this.cityId = cityId;
        this.price = price;
    }
}
exports.NewPartnerWorking_CityEntity = NewPartnerWorking_CityEntity;
