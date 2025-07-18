"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePartnerInfoEntity = exports.PartnerInfoEntity = void 0;
class PartnerInfoEntity {
    constructor(partnerId, name, zone, address, workingArea_Zones, workingArea_Communities, workingArea_Cities, deliveryWorking_Zones, deliveryWorking_Communities, deliveryWorking_Cities, imgPath) {
        this.partnerId = partnerId;
        this.name = name;
        this.zone = zone;
        this.address = address;
        this.workingArea_Zones = workingArea_Zones;
        this.workingArea_Communities = workingArea_Communities;
        this.workingArea_Cities = workingArea_Cities;
        this.deliveryWorking_Zones = deliveryWorking_Zones;
        this.deliveryWorking_Communities = deliveryWorking_Communities;
        this.deliveryWorking_Cities = deliveryWorking_Cities;
        this.imgPath = imgPath;
    }
}
exports.PartnerInfoEntity = PartnerInfoEntity;
class SimplePartnerInfoEntity {
    constructor(partnerId, name, address, zone, imgPath) {
        this.partnerId = partnerId;
        this.name = name;
        this.address = address;
        this.zone = zone;
        this.imgPath = imgPath;
    }
}
exports.SimplePartnerInfoEntity = SimplePartnerInfoEntity;
