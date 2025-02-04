"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerProductEntiy = exports.UpdatePartnerProductRequestEntity = exports.NewPartnerProductRequestEntity = void 0;
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
class PartnerProductEntiy {
    constructor(product, partner, price, stock) {
        this.product = product;
        this.partner = partner;
        this.price = price;
        this.stock = stock;
    }
}
exports.PartnerProductEntiy = PartnerProductEntiy;
