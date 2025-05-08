"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarRequestEntity = exports.DeliveryCostEntity = exports.SimpleCarEntity = exports.CarEntity = void 0;
class CarEntity {
    constructor(partnerProduct, userId, quantity, active) {
        this.partnerProduct = partnerProduct;
        this.userId = userId;
        this.quantity = quantity;
        this.active = active;
    }
}
exports.CarEntity = CarEntity;
class SimpleCarEntity {
    constructor(partnerProduct, productId, userId, quantity, active) {
        this.partnerProduct = partnerProduct;
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.active = active;
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
    constructor(partnerProductId, 
    // public userId: number,
    quantity) {
        this.partnerProductId = partnerProductId;
        this.quantity = quantity;
    }
}
exports.NewCarRequestEntity = NewCarRequestEntity;
