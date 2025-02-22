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
var DeliveryTime;
(function (DeliveryTime) {
    DeliveryTime[DeliveryTime["Morning"] = 1] = "Morning";
    DeliveryTime[DeliveryTime["MiddleDay"] = 2] = "MiddleDay";
    DeliveryTime[DeliveryTime["Afternoon"] = 3] = "Afternoon";
})(DeliveryTime || (DeliveryTime = {}));
class ParentOrderEntity {
    constructor(id, userId, createdAt, childOrders, deliveryDate, deliveryTime) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.childOrders = childOrders;
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
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
