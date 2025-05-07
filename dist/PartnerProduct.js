"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PP_FilterEntity = exports.PartnerProductEntiy = exports.ListPartnerProductEntity = exports.SimplePartnerProduct_HasUserZoneEntity = exports.SimplePartnerProductEntity = void 0;
class SimplePartnerProductEntity {
    constructor(partner, priceSubunit, stock, price) {
        this.partner = partner;
        this.priceSubunit = priceSubunit;
        this.stock = stock;
        this.price = price;
    }
}
exports.SimplePartnerProductEntity = SimplePartnerProductEntity;
class SimplePartnerProduct_HasUserZoneEntity {
    constructor(isInUserZone, partner, priceSubunit, stock, price) {
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
    constructor(product, partner, price, stock) {
        this.product = product;
        this.partner = partner;
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
