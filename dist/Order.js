"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleChildOrderEntity = exports.ChildOrderEntity = exports.ParentOrderEntity = exports.DeliveryTimeList = exports.DeliveryTime = exports.OrderStateList = exports.OrderState = void 0;
exports.getOrderStateString = getOrderStateString;
exports.getDeliveryTimeString = getDeliveryTimeString;
var OrderState;
(function (OrderState) {
    OrderState[OrderState["Started"] = 1] = "Started";
    OrderState[OrderState["Packed"] = 2] = "Packed";
    OrderState[OrderState["InRoute"] = 3] = "InRoute";
    OrderState[OrderState["Arrived"] = 4] = "Arrived";
    OrderState[OrderState["Delivered"] = 5] = "Delivered";
    OrderState[OrderState["Cancelled"] = 99] = "Cancelled";
})(OrderState || (exports.OrderState = OrderState = {}));
exports.OrderStateList = Object.values(OrderState).filter(value => typeof value === 'number');
function getOrderStateString(orderState) {
    switch (orderState) {
        case OrderState.Started:
            return "Empezado";
        case OrderState.Packed:
            return "Empacado";
        case OrderState.InRoute:
            return "En Ruta";
        case OrderState.Arrived:
            return "En la ubicación de entrega";
        case OrderState.Delivered:
            return "Entregado";
        case OrderState.Cancelled:
            return "Cancelado";
    }
}
var DeliveryTime;
(function (DeliveryTime) {
    DeliveryTime[DeliveryTime["Morning"] = 1] = "Morning";
    DeliveryTime[DeliveryTime["MiddleDay"] = 2] = "MiddleDay";
    DeliveryTime[DeliveryTime["Afternoon"] = 3] = "Afternoon";
})(DeliveryTime || (exports.DeliveryTime = DeliveryTime = {}));
exports.DeliveryTimeList = Object.values(DeliveryTime).filter(value => typeof value === 'number');
function getDeliveryTimeString(deliveryTime) {
    switch (deliveryTime) {
        case DeliveryTime.Morning:
            return "07:00 AM - 12:00 PM";
        case DeliveryTime.MiddleDay:
            return "12:00 PM - 2:00 PM";
        case DeliveryTime.Afternoon:
            return "2:00 PM - 6:00pm";
    }
}
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
class SimpleChildOrderEntity {
    constructor(parentOrderId, state, price, partnerInformation) {
        this.parentOrderId = parentOrderId;
        this.state = state;
        this.price = price;
        this.partnerInformation = partnerInformation;
    }
}
exports.SimpleChildOrderEntity = SimpleChildOrderEntity;
