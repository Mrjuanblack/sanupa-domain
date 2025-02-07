"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PP_FilterEntity = exports.PartnerProductEntiy = exports.ListPartnerProductEntity = exports.SimplePartnerProductEntity = exports.UpdatePartnerProductRequestEntity = exports.NewPartnerProductRequestEntity = void 0;
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
class ListPartnerProductEntity {
    constructor(product, partnerProducts) {
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
    constructor(price, stock, subcategoryId, description, brand, name) {
        this.price = price;
        this.stock = stock;
        this.subcategoryId = subcategoryId;
        this.description = description;
        this.brand = brand;
        this.name = name;
    }
}
exports.PP_FilterEntity = PP_FilterEntity;
