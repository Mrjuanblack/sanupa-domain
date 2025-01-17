"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWithoutCodeEntity = exports.ProductWithCodeEntity = exports.EstratumList = exports.Estratum = exports.ConditionList = exports.Condition = exports.OfferTypeList = exports.OfferType = void 0;
var OfferType;
(function (OfferType) {
    OfferType[OfferType["Sale"] = 1] = "Sale";
    OfferType[OfferType["Lease"] = 2] = "Lease";
    OfferType[OfferType["Rental"] = 3] = "Rental";
})(OfferType || (exports.OfferType = OfferType = {}));
exports.OfferTypeList = Object.values(OfferType).filter(value => typeof value === 'number');
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 1] = "New";
    Condition[Condition["Used"] = 2] = "Used";
})(Condition || (exports.Condition = Condition = {}));
exports.ConditionList = Object.values(Condition).filter(value => typeof value === 'number');
var Estratum;
(function (Estratum) {
    Estratum[Estratum["Zero"] = 1] = "Zero";
    Estratum[Estratum["One"] = 2] = "One";
    Estratum[Estratum["Two"] = 3] = "Two";
    Estratum[Estratum["Three"] = 4] = "Three";
    Estratum[Estratum["Four"] = 5] = "Four";
    Estratum[Estratum["Five"] = 6] = "Five";
    Estratum[Estratum["Six"] = 7] = "Six";
})(Estratum || (exports.Estratum = Estratum = {}));
exports.EstratumList = Object.values(Estratum).filter(value => typeof value === 'number');
class ProductWithCodeEntity {
    constructor(id, name, subcategory, gtin, description, brand, gpc, imgPath, quantity, measurement, market, measurementAlt) {
        this.id = id;
        this.name = name;
        this.subcategory = subcategory;
        this.gtin = gtin;
        this.description = description;
        this.brand = brand;
        this.gpc = gpc;
        this.imgPath = imgPath;
        this.quantity = quantity;
        this.measurement = measurement;
        this.market = market;
        this.measurementAlt = measurementAlt;
    }
}
exports.ProductWithCodeEntity = ProductWithCodeEntity;
class ProductWithoutCodeEntity {
    constructor(id, name, subcategory, imgPath, description, brand, measurement, productType, zone, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.name = name;
        this.subcategory = subcategory;
        this.imgPath = imgPath;
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
exports.ProductWithoutCodeEntity = ProductWithoutCodeEntity;
