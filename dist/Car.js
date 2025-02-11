"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarRequestEntity = exports.CarEntity = void 0;
class CarEntity {
    constructor(product, partnerProduct, userId, quantity) {
        this.product = product;
        this.partnerProduct = partnerProduct;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.CarEntity = CarEntity;
class NewCarRequestEntity {
    constructor(productId, partnerId, userId, quantity) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.NewCarRequestEntity = NewCarRequestEntity;
