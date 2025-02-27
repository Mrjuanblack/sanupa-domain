"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleChildOrder_AdminEntity = exports.SimpleChildOrderEntity = exports.ChildOrder_AdminEntity = exports.ChildOrderEntity = exports.OrderItemEntity = exports.NewOrderRequestEntity = exports.ParentOrderEntity = exports.DeliveryTimeList = exports.DeliveryTime = exports.OrderStateList = exports.OrderState = void 0;
exports.getOrderStateString = getOrderStateString;
exports.getDeliveryTimeString = getDeliveryTimeString;
var OrderState;
(function (OrderState) {
    OrderState[OrderState["Started"] = 1] = "Started";
    OrderState[OrderState["Packed"] = 2] = "Packed";
    OrderState[OrderState["InRoute"] = 3] = "InRoute";
    OrderState[OrderState["Arrived"] = 4] = "Arrived";
    OrderState[OrderState["Delivered"] = 5] = "Delivered";
    OrderState[OrderState["Finished"] = 98] = "Finished";
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
        case OrderState.Finished:
            return "Finalizado";
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
class NewOrderRequestEntity {
    constructor(deliveryDate, deliveryTime) {
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
    }
}
exports.NewOrderRequestEntity = NewOrderRequestEntity;
class OrderItemEntity {
    constructor(id, product, quantity, checked) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.checked = checked;
    }
}
exports.OrderItemEntity = OrderItemEntity;
class ChildOrderEntity {
    constructor(id, parentOrderId, state, price, deliveryPrice, evidenceImg, products) {
        this.id = id;
        this.parentOrderId = parentOrderId;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.products = products;
    }
}
exports.ChildOrderEntity = ChildOrderEntity;
class ChildOrder_AdminEntity {
    constructor(id, parentOrderId, user, state, price, deliveryPrice, evidenceImg, products) {
        this.id = id;
        this.parentOrderId = parentOrderId;
        this.user = user;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.products = products;
    }
}
exports.ChildOrder_AdminEntity = ChildOrder_AdminEntity;
class SimpleChildOrderEntity {
    constructor(id, parentOrderId, state, price, deliveryPrice, partnerInformation) {
        this.id = id;
        this.parentOrderId = parentOrderId;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.partnerInformation = partnerInformation;
    }
}
exports.SimpleChildOrderEntity = SimpleChildOrderEntity;
class SimpleChildOrder_AdminEntity {
    constructor(id, parentOrderId, user, state, price, deliveryPrice, evidenceImg, partnerInformation) {
        this.id = id;
        this.parentOrderId = parentOrderId;
        this.user = user;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.partnerInformation = partnerInformation;
    }
}
exports.SimpleChildOrder_AdminEntity = SimpleChildOrder_AdminEntity;
