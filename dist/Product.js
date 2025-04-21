"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWithoutCodeEntity = exports.ProductWithCodeEntity = exports.UpdateProductWithCodeRequestEntity = exports.UpdateProductWithoutCodeRequestEntity = exports.EstratumList = exports.Estratum = exports.ConditionList = exports.Condition = exports.OfferTypeList = exports.OfferType = exports.GS1_Unit = exports.ProductStateList = exports.ProductState = void 0;
exports.getComplementaryInfo = getComplementaryInfo;
exports.getQuantityBasedOnUnits = getQuantityBasedOnUnits;
exports.getProductStateString = getProductStateString;
exports.parseStringToGS1_Unit = parseStringToGS1_Unit;
exports.isSingularUnit = isSingularUnit;
exports.getGS1UnitString = getGS1UnitString;
exports.getOfferTypeString = getOfferTypeString;
exports.getConditionString = getConditionString;
exports.getEstratumString = getEstratumString;
const Utils_1 = require("./Utils");
function getComplementaryInfo(quantityString, unitsString) {
    var _a;
    const units = parseStringToGS1_Unit(unitsString);
    const quantity = (_a = (0, Utils_1.parseStringToNumber)(quantityString)) !== null && _a !== void 0 ? _a : 1;
    if (isSingularUnit(units)) {
        return null;
    }
    if (units === GS1_Unit.UNDF) {
        return null;
    }
    return `${quantity} ${getGS1UnitString(units)}`;
}
function getQuantityBasedOnUnits(quantityString, unitsString) {
    var _a;
    const units = parseStringToGS1_Unit(unitsString);
    const quantity = (_a = (0, Utils_1.parseStringToNumber)(quantityString)) !== null && _a !== void 0 ? _a : 1;
    if (isSingularUnit(units)) {
        return quantity;
    }
    return null;
}
var ProductState;
(function (ProductState) {
    ProductState[ProductState["PreCreated"] = 1] = "PreCreated";
    ProductState[ProductState["Created"] = 2] = "Created";
    ProductState[ProductState["Verified"] = 3] = "Verified";
    ProductState[ProductState["Error"] = 4] = "Error";
    ProductState[ProductState["Finalized"] = 5] = "Finalized";
})(ProductState || (exports.ProductState = ProductState = {}));
exports.ProductStateList = Object.values(ProductState).filter(value => typeof value === 'number');
function getProductStateString(productState) {
    switch (productState) {
        case ProductState.PreCreated:
            return "Pre-Creado";
        case ProductState.Created:
            return "Creado";
        case ProductState.Verified:
            return "Verificado";
        case ProductState.Error:
            return "Error";
        case ProductState.Finalized:
            return "Finalizado";
    }
}
var GS1_Unit;
(function (GS1_Unit) {
    GS1_Unit["CM"] = "CMT";
    GS1_Unit["CMQ"] = "CMQ";
    GS1_Unit["GRM"] = "GRM";
    GS1_Unit["KG"] = "KGM";
    GS1_Unit["LBR"] = "LBR";
    GS1_Unit["LTR"] = "LTR";
    GS1_Unit["MTR"] = "MTR";
    GS1_Unit["MGM"] = "MGM";
    GS1_Unit["MLT"] = "MLT";
    GS1_Unit["MMT"] = "MMT";
    GS1_Unit["OZA"] = "OZA";
    GS1_Unit["ONZ"] = "ONZ";
    GS1_Unit["SET"] = "SET";
    GS1_Unit["H87"] = "H87";
    GS1_Unit["PTN"] = "PTN";
    GS1_Unit["KT"] = "KT";
    GS1_Unit["G26"] = "G26";
    GS1_Unit["EA"] = "EA";
    GS1_Unit["UNDF"] = "-----";
})(GS1_Unit || (exports.GS1_Unit = GS1_Unit = {}));
function parseStringToGS1_Unit(value) {
    const findResult = Object.values(GS1_Unit).find(x => x.toLowerCase() === value.toLowerCase());
    if (findResult === undefined)
        return GS1_Unit.UNDF;
    return findResult;
}
function isSingularUnit(value) {
    switch (value) {
        case GS1_Unit.H87:
        case GS1_Unit.PTN:
        case GS1_Unit.KT:
        case GS1_Unit.G26:
        case GS1_Unit.EA:
            return true;
        default:
            return false;
    }
}
function getGS1UnitString(unit) {
    switch (unit) {
        case GS1_Unit.CM:
            return "cm";
        case GS1_Unit.CMQ:
            return "cm3";
        case GS1_Unit.GRM:
            return "gramos";
        case GS1_Unit.KG:
            return "Kg";
        case GS1_Unit.LBR:
            return "Libra";
        case GS1_Unit.LTR:
            return "Litro";
        case GS1_Unit.MTR:
            return "metros";
        case GS1_Unit.MGM:
            return "mg";
        case GS1_Unit.MLT:
            return "mL";
        case GS1_Unit.MMT:
            return "mm";
        case GS1_Unit.OZA:
            return "Onzas";
        case GS1_Unit.ONZ:
            return "Onzas";
        case GS1_Unit.SET:
            return "Set";
        case GS1_Unit.H87:
        case GS1_Unit.PTN:
        case GS1_Unit.KT:
        case GS1_Unit.G26:
        case GS1_Unit.EA:
            return "Und";
        case GS1_Unit.UNDF:
            return "";
    }
}
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
    constructor(id, subcategory, lastUpdated, gtin, name, description, brand, gpc, s_productType, s_brand, s_subunitType, complementaryInfo, imgPath, minImgPath, secondImgPath, thirdImgPath, codeImgPath, quantity, measurement, market, measurementType, measurementQuantity, productState) {
        this.id = id;
        this.subcategory = subcategory;
        this.lastUpdated = lastUpdated;
        this.gtin = gtin;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.gpc = gpc;
        this.s_productType = s_productType;
        this.s_brand = s_brand;
        this.s_subunitType = s_subunitType;
        this.complementaryInfo = complementaryInfo;
        this.imgPath = imgPath;
        this.minImgPath = minImgPath;
        this.secondImgPath = secondImgPath;
        this.thirdImgPath = thirdImgPath;
        this.codeImgPath = codeImgPath;
        this.quantity = quantity;
        this.measurement = measurement;
        this.market = market;
        this.measurementType = measurementType;
        this.measurementQuantity = measurementQuantity;
        this.productState = productState;
    }
}
exports.ProductWithCodeEntity = ProductWithCodeEntity;
class ProductWithoutCodeEntity {
    constructor(id, name, subcategory, lastUpdated, imgPath, minImgPath, description, brand, measurementType, measurementQuantity, productType, zone, offerType, area, condition, stratum, antiquity, bathrooms, rooms, parkingLots, cylinderCapacity, mileage) {
        this.id = id;
        this.name = name;
        this.subcategory = subcategory;
        this.lastUpdated = lastUpdated;
        this.imgPath = imgPath;
        this.minImgPath = minImgPath;
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
