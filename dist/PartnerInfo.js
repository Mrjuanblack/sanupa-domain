"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPartnerInfoRequestEntity = exports.PartnerInfoEntity = void 0;
class PartnerInfoEntity {
    constructor(name, address, workingZones, imgPath) {
        this.name = name;
        this.address = address;
        this.workingZones = workingZones;
        this.imgPath = imgPath;
    }
}
exports.PartnerInfoEntity = PartnerInfoEntity;
class NewPartnerInfoRequestEntity {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
exports.NewPartnerInfoRequestEntity = NewPartnerInfoRequestEntity;
