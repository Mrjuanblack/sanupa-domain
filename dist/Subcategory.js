"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryEntity = void 0;
class SubcategoryEntity {
    constructor(id, categoryId, name, imgPath, usesCode, active, productType, zone, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.imgPath = imgPath;
        this.usesCode = usesCode;
        this.active = active;
        this.productType = productType;
        this.zone = zone;
        this.offerType = offerType;
        this.area = area;
        this.condition = condition;
        this.stratum = stratum;
        this.antiquity = antiquity;
        this.bathrooms = bathrooms;
        this.rooms = rooms;
        this.parkingLots = parkingLots;
        this.cylinderCapacity = cylinderCapacity;
        this.mileage = mileage;
    }
}
exports.SubcategoryEntity = SubcategoryEntity;
