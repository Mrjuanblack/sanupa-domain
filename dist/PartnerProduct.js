"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerProductEntiy = exports.NewPartnerProductRequestEntity = void 0;
class NewPartnerProductRequestEntity {
    constructor(productId, partnerId, price) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.price = price;
    }
}
exports.NewPartnerProductRequestEntity = NewPartnerProductRequestEntity;
class PartnerProductEntiy {
    constructor(id, product, partner, price) {
        this.id = id;
        this.product = product;
        this.partner = partner;
        this.price = price;
    }
}
exports.PartnerProductEntiy = PartnerProductEntiy;
