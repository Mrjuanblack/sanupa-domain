"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildOrderEntity = exports.ParentOrderEntity = void 0;
var OrderState;
(function (OrderState) {
    OrderState[OrderState["Started"] = 1] = "Started";
    OrderState[OrderState["Packed"] = 2] = "Packed";
    OrderState[OrderState["InRoute"] = 3] = "InRoute";
    OrderState[OrderState["Arrived"] = 4] = "Arrived";
    OrderState[OrderState["Delivered"] = 5] = "Delivered";
    OrderState[OrderState["Cancelled"] = 99] = "Cancelled";
})(OrderState || (OrderState = {}));
class ParentOrderEntity {
    constructor(id, createdAt, childOrders) {
        this.id = id;
        this.createdAt = createdAt;
        this.childOrders = childOrders;
    }
}
exports.ParentOrderEntity = ParentOrderEntity;
class ChildOrderEntity {
    constructor(parentOrderId, state, price, products) {
        this.parentOrderId = parentOrderId;
        this.state = state;
        this.price = price;
        this.products = products;
    }
}
exports.ChildOrderEntity = ChildOrderEntity;
