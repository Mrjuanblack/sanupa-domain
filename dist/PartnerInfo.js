"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPartnerInfoRequestEntity = exports.SimplePartnerInfoEntity = exports.PartnerInfoEntity = void 0;
class PartnerInfoEntity {
    constructor(name, address, workingArea_Zones, workingArea_Communities, workingArea_Cities, imgPath) {
        this.name = name;
        this.address = address;
        this.workingArea_Zones = workingArea_Zones;
        this.workingArea_Communities = workingArea_Communities;
        this.workingArea_Cities = workingArea_Cities;
        this.imgPath = imgPath;
    }
}
exports.PartnerInfoEntity = PartnerInfoEntity;
class SimplePartnerInfoEntity {
    constructor(name, imgPath) {
        this.name = name;
        this.imgPath = imgPath;
    }
}
exports.SimplePartnerInfoEntity = SimplePartnerInfoEntity;
class NewPartnerInfoRequestEntity {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
exports.NewPartnerInfoRequestEntity = NewPartnerInfoRequestEntity;
