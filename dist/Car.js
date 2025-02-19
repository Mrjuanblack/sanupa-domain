"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarRequestEntity = exports.DeliveryCostEntity = exports.SimpleCarEntity = exports.CarEntity = void 0;
class CarEntity {
    constructor(partnerProduct, userId, quantity) {
        this.partnerProduct = partnerProduct;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.CarEntity = CarEntity;
class SimpleCarEntity {
    constructor(partnerProduct, productId, userId, quantity) {
        this.partnerProduct = partnerProduct;
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
    }
}
exports.SimpleCarEntity = SimpleCarEntity;
class DeliveryCostEntity {
    constructor(partner, price) {
        this.partner = partner;
        this.price = price;
    }
}
exports.DeliveryCostEntity = DeliveryCostEntity;
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
