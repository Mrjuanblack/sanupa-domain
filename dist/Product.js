"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWithoutCodeEntity = exports.ProductWithCodeEntity = exports.UpdateProductWithCodeRequestEntity = exports.UpdateProductWithoutCodeRequestEntity = exports.EstratumList = exports.Estratum = exports.ConditionList = exports.Condition = exports.OfferTypeList = exports.OfferType = void 0;
exports.getOfferTypeString = getOfferTypeString;
exports.getConditionString = getConditionString;
exports.getEstratumString = getEstratumString;
var OfferType;
(function (OfferType) {
    OfferType[OfferType["Sale"] = 1] = "Sale";
    OfferType[OfferType["Lease"] = 2] = "Lease";
    OfferType[OfferType["Rental"] = 3] = "Rental";
})(OfferType || (exports.OfferType = OfferType = {}));
exports.OfferTypeList = Object.values(OfferType).filter(value => typeof value === 'number');
function getOfferTypeString(offerType) {
    switch (offerType) {
        case OfferType.Sale:
            return "Venta";
        case OfferType.Lease:
            return "Arriendo";
        case OfferType.Rental:
            return "Alquiler";
    }
}
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 1] = "New";
    Condition[Condition["Used"] = 2] = "Used";
})(Condition || (exports.Condition = Condition = {}));
exports.ConditionList = Object.values(Condition).filter(value => typeof value === 'number');
function getConditionString(condition) {
    switch (condition) {
        case Condition.New:
            return "Nuevo";
        case Condition.Used:
            return "Usado";
    }
}
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
function getEstratumString(estratum) {
    switch (estratum) {
        case Estratum.Zero:
            return "Estrato 0";
        case Estratum.One:
            return "Estrato 1";
        case Estratum.Two:
            return "Estrato 2";
        case Estratum.Three:
            return "Estrato 3";
        case Estratum.Four:
            return "Estrato 4";
        case Estratum.Five:
            return "Estrato 5";
        case Estratum.Six:
            return "Estrato 6";
    }
}
class UpdateProductWithoutCodeRequestEntity {
    constructor(id, name, description, brand, measurementTypeId, measurementQuantity, productTypeId, zoneId, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.measurementTypeId = measurementTypeId;
        this.measurementQuantity = measurementQuantity;
        this.productTypeId = productTypeId;
        this.zoneId = zoneId;
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
exports.UpdateProductWithoutCodeRequestEntity = UpdateProductWithoutCodeRequestEntity;
class UpdateProductWithCodeRequestEntity {
    constructor(id, imgPath, name, description, brand, measurementId, measurementQuantity) {
        this.id = id;
        this.imgPath = imgPath;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.measurementId = measurementId;
        this.measurementQuantity = measurementQuantity;
    }
}
exports.UpdateProductWithCodeRequestEntity = UpdateProductWithCodeRequestEntity;
class ProductWithCodeEntity {
    constructor(id, subcategory, gtin, name, description, brand, gpc, imgPath, secondImgPath, thirdImgPath, codeImgPath, quantity, measurement, market, measurementType, measurementQuantity) {
        this.id = id;
        this.subcategory = subcategory;
        this.gtin = gtin;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.gpc = gpc;
        this.imgPath = imgPath;
        this.secondImgPath = secondImgPath;
        this.thirdImgPath = thirdImgPath;
        this.codeImgPath = codeImgPath;
        this.quantity = quantity;
        this.measurement = measurement;
        this.market = market;
        this.measurementType = measurementType;
        this.measurementQuantity = measurementQuantity;
    }
}
exports.ProductWithCodeEntity = ProductWithCodeEntity;
class ProductWithoutCodeEntity {
    constructor(id, name, subcategory, imgPath, description, brand, measurementType, measurementQuantity, productType, zone, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.name = name;
        this.subcategory = subcategory;
        this.imgPath = imgPath;
        this.description = description;
        this.brand = brand;
        this.measurementType = measurementType;
        this.measurementQuantity = measurementQuantity;
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
