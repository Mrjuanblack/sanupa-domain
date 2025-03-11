"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PP_FilterEntity = exports.PartnerProductEntiy = exports.ListPartnerProductEntity = exports.SimplePartnerProduct_HasUserZoneEntity = exports.SimplePartnerProductEntity = exports.UpdatePartnerProductRequestEntity = exports.NewPartnerProductRequestEntity = void 0;
class NewPartnerProductRequestEntity {
    constructor(productId, partnerId, price, stock) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.price = price;
        this.stock = stock;
    }
}
exports.NewPartnerProductRequestEntity = NewPartnerProductRequestEntity;
class UpdatePartnerProductRequestEntity {
    constructor(productId, partnerId, price, stock) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.price = price;
        this.stock = stock;
    }
}
exports.UpdatePartnerProductRequestEntity = UpdatePartnerProductRequestEntity;
class SimplePartnerProductEntity {
    constructor(partner, price, stock) {
        this.partner = partner;
        this.price = price;
        this.stock = stock;
    }
}
exports.SimplePartnerProductEntity = SimplePartnerProductEntity;
class SimplePartnerProduct_HasUserZoneEntity {
    constructor(isInUserZone, partner, price, stock) {
        this.isInUserZone = isInUserZone;
        this.partner = partner;
        this.price = price;
        this.stock = stock;
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
