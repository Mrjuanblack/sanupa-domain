"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePartnerInfoEntity = exports.PartnerInfoEntity = void 0;
class PartnerInfoEntity {
    constructor(zone, name, address, partnerId, imgPath, workingArea_Zones, workingArea_Regions, workingArea_Cities, deliveryWorking_Zones, deliveryWorking_Cities, workingArea_Communities, deliveryWorking_Communities) {
        this.zone = zone;
        this.name = name;
        this.address = address;
        this.partnerId = partnerId;
        this.imgPath = imgPath;
        this.workingArea_Zones = workingArea_Zones;
        this.workingArea_Regions = workingArea_Regions;
        this.workingArea_Cities = workingArea_Cities;
        this.deliveryWorking_Zones = deliveryWorking_Zones;
        this.deliveryWorking_Cities = deliveryWorking_Cities;
        this.workingArea_Communities = workingArea_Communities;
        this.deliveryWorking_Communities = deliveryWorking_Communities;
    }
}
exports.PartnerInfoEntity = PartnerInfoEntity;
class SimplePartnerInfoEntity {
    constructor(zone, name, address, partnerId, imgPath) {
        this.zone = zone;
        this.name = name;
        this.address = address;
        this.partnerId = partnerId;
        this.imgPath = imgPath;
    }
}
exports.SimplePartnerInfoEntity = SimplePartnerInfoEntity;
