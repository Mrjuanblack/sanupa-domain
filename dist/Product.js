"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWithoutCodeEntity = exports.ProductWithCodeEntity = exports.NewProductWithoutCodeRequestEntity = exports.NewProductWithCodeRequestEntity = exports.Estratum = exports.Condition = exports.OfferType = void 0;
var OfferType;
(function (OfferType) {
    OfferType[OfferType["Sale"] = 1] = "Sale";
    OfferType[OfferType["Lease"] = 2] = "Lease";
    OfferType[OfferType["Rental"] = 3] = "Rental";
})(OfferType || (exports.OfferType = OfferType = {}));
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 1] = "New";
    Condition[Condition["Used"] = 2] = "Used";
})(Condition || (exports.Condition = Condition = {}));
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
class NewProductWithCodeRequestEntity {
    constructor(subcategoryId, imgPath, gtin, description, brand, gpc, quantity, measurement, market) {
        this.subcategoryId = subcategoryId;
        this.imgPath = imgPath;
        this.gtin = gtin;
        this.description = description;
        this.brand = brand;
        this.gpc = gpc;
        this.quantity = quantity;
        this.measurement = measurement;
        this.market = market;
    }
}
exports.NewProductWithCodeRequestEntity = NewProductWithCodeRequestEntity;
class NewProductWithoutCodeRequestEntity {
    constructor(subcategoryId, imgPath, description, brand, measurement, productType, zone, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.subcategoryId = subcategoryId;
        this.imgPath = imgPath;
        this.description = description;
        this.brand = brand;
        this.measurement = measurement;
        this.productType = productType;
        this.zone = zone;
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
exports.NewProductWithoutCodeRequestEntity = NewProductWithoutCodeRequestEntity;
class ProductWithCodeEntity {
    constructor(id, subcategory, gtin, description, brand, gpc, imgPath, quantity, measurement, market, measurementAlt) {
        this.id = id;
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
    constructor(id, subcategory, imgPath, description, brand, measurement, productType, zone, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.subcategory = subcategory;
        this.imgPath = imgPath;
        this.description = description;
        this.brand = brand;
        this.measurement = measurement;
        this.productType = productType;
        this.zone = zone;
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
