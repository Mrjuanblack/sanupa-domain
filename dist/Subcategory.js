"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryEntity = void 0;
class SubcategoryEntity {
    constructor(id, category, name, imgPath, usesCode, usesSizeMeasurement, usesSubunits, uniqueName, active, description, brand, measurement, productType, zone, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.imgPath = imgPath;
        this.usesCode = usesCode;
        this.usesSizeMeasurement = usesSizeMeasurement;
        this.usesSubunits = usesSubunits;
        this.uniqueName = uniqueName;
        this.active = active;
        this.description = description;
        this.brand = brand;
        this.measurement = measurement;
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
