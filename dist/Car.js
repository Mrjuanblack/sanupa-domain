"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarRequestEntity = exports.SimpleCarEntity = exports.CarEntity = void 0;
class CarEntity {
    constructor(partnerProduct, userId, quantity) {
        this.partnerProduct = partnerProduct;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.CarEntity = CarEntity;
class SimpleCarEntity {
    constructor(productId, partnerId, userId, quantity) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.SimpleCarEntity = SimpleCarEntity;
class NewCarRequestEntity {
    constructor(productId, partnerId, 
    // public userId: number,
    quantity) {
        this.productId = productId;
        this.partnerId = partnerId;
        this.quantity = quantity;
    }
}
exports.NewCarRequestEntity = NewCarRequestEntity;
