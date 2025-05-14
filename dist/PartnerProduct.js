"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PP_FilterEntity = exports.PartnerProductEntiy = exports.ListPartnerProductEntity = exports.SimplePartnerProduct_HasUserZoneEntity = exports.SimplePartnerProductEntity = exports.PartnerProduct_NotValidatedEntity = void 0;
class PartnerProduct_NotValidatedEntity {
    constructor(id, partnerId, product) {
        this.id = id;
        this.partnerId = partnerId;
        this.product = product;
    }
}
exports.PartnerProduct_NotValidatedEntity = PartnerProduct_NotValidatedEntity;
class SimplePartnerProductEntity {
    constructor(id, internalCode, partner, product, priceSubunit, stock, price) {
        this.id = id;
        this.internalCode = internalCode;
        this.partner = partner;
        this.product = product;
        this.priceSubunit = priceSubunit;
        this.stock = stock;
        this.price = price;
    }
}
exports.SimplePartnerProductEntity = SimplePartnerProductEntity;
class SimplePartnerProduct_HasUserZoneEntity {
    constructor(id, internalCode, isInUserZone, partner, priceSubunit, stock, price) {
        this.id = id;
        this.internalCode = internalCode;
        this.isInUserZone = isInUserZone;
        this.partner = partner;
        this.priceSubunit = priceSubunit;
        this.stock = stock;
        this.price = price;
    }
}
exports.SimplePartnerProduct_HasUserZoneEntity = SimplePartnerProduct_HasUserZoneEntity;
class ListPartnerProductEntity {
    constructor(favorite, product, partnerProducts) {
        this.favorite = favorite;
        this.product = product;
        this.partnerProducts = partnerProducts;
    }
}
exports.ListPartnerProductEntity = ListPartnerProductEntity;
class PartnerProductEntiy {
    constructor(id, internalCode, product, partner, priceSubunit, price, stock) {
        this.id = id;
        this.internalCode = internalCode;
        this.product = product;
        this.partner = partner;
        this.priceSubunit = priceSubunit;
        this.price = price;
        this.stock = stock;
    }
}
exports.PartnerProductEntiy = PartnerProductEntiy;
class PP_FilterEntity {
    constructor(price, stock, categoryId, subcategoryId, description, brand, name, zoneId, favorite) {
        this.price = price;
        this.stock = stock;
        this.categoryId = categoryId;
        this.subcategoryId = subcategoryId;
        this.description = description;
        this.brand = brand;
        this.name = name;
        this.zoneId = zoneId;
        this.favorite = favorite;
    }
}
exports.PP_FilterEntity = PP_FilterEntity;
