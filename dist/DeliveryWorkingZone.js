"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewDeliveryWorking_CityEntity = exports.DeliveryWorking_CityEntity = exports.NewDeliveryWorking_CommunityEntity = exports.DeliveryWorking_CommunityEntity = exports.NewDeliveryWorking_ZoneEntity = exports.DeliveryWorking_ZoneEntity = void 0;
class DeliveryWorking_ZoneEntity {
    constructor(zone) {
        this.zone = zone;
    }
}
exports.DeliveryWorking_ZoneEntity = DeliveryWorking_ZoneEntity;
class NewDeliveryWorking_ZoneEntity {
    constructor(partnerId, zoneId) {
        this.partnerId = partnerId;
        this.zoneId = zoneId;
    }
}
exports.NewDeliveryWorking_ZoneEntity = NewDeliveryWorking_ZoneEntity;
class DeliveryWorking_CommunityEntity {
    constructor(community) {
        this.community = community;
    }
}
exports.DeliveryWorking_CommunityEntity = DeliveryWorking_CommunityEntity;
class NewDeliveryWorking_CommunityEntity {
    constructor(partnerId, communityId) {
        this.partnerId = partnerId;
        this.communityId = communityId;
    }
}
exports.NewDeliveryWorking_CommunityEntity = NewDeliveryWorking_CommunityEntity;
class DeliveryWorking_CityEntity {
    constructor(city) {
        this.city = city;
    }
}
exports.DeliveryWorking_CityEntity = DeliveryWorking_CityEntity;
class NewDeliveryWorking_CityEntity {
    constructor(partnerId, cityId) {
        this.partnerId = partnerId;
        this.cityId = cityId;
    }
}
exports.NewDeliveryWorking_CityEntity = NewDeliveryWorking_CityEntity;
