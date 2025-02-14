"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPartnerWorkingZoneEntity = exports.PartnerWorkingZoneEntity = void 0;
class PartnerWorkingZoneEntity {
    constructor(zone, price) {
        this.zone = zone;
        this.price = price;
    }
}
exports.PartnerWorkingZoneEntity = PartnerWorkingZoneEntity;
class NewPartnerWorkingZoneEntity {
    constructor(partnerId, zoneId, price) {
        this.partnerId = partnerId;
        this.zoneId = zoneId;
        this.price = price;
    }
}
exports.NewPartnerWorkingZoneEntity = NewPartnerWorkingZoneEntity;
