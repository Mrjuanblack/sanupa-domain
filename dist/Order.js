"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReportEntity = exports.SimpleChildOrder_AdminEntity = exports.SimpleChildOrder_PartnerEntity = exports.SimpleChildOrderEntity = exports.ChildOrder_AdminEntity = exports.ChildOrderEntity = exports.OrderItemEntity = exports.NewOrderRequestEntity = exports.SimpleParentOrderEntity = exports.ParentOrderEntity = exports.DeliveryTimeList = exports.DeliveryTime = exports.isOrderEditable = exports.OrderStateList = exports.OrderState = void 0;
exports.getOrderStateString = getOrderStateString;
exports.getDeliveryTimeString = getDeliveryTimeString;
exports.getDeliveryMaxTimeString = getDeliveryMaxTimeString;
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
const isOrderEditable = (orderState) => {
    const allowedStates = [OrderState.Started, OrderState.Packed];
    return allowedStates.includes(orderState);
};
exports.isOrderEditable = isOrderEditable;
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
function getDeliveryMaxTimeString(deliveryTime) {
    switch (deliveryTime) {
        case DeliveryTime.Morning:
            return "12:00 PM";
        case DeliveryTime.MiddleDay:
            return "2:00 PM";
        case DeliveryTime.Afternoon:
            return "6:00 PM";
    }
}
class ParentOrderEntity {
    constructor(id, userId, name, address, zone, createdAt, childOrders, deliveryDate, deliveryTime) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.address = address;
        this.zone = zone;
        this.createdAt = createdAt;
        this.childOrders = childOrders;
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
    }
}
exports.ParentOrderEntity = ParentOrderEntity;
class SimpleParentOrderEntity {
    constructor(id, userId, name, address, zone, createdAt, deliveryDate, deliveryTime) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.address = address;
        this.zone = zone;
        this.createdAt = createdAt;
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
    }
}
exports.SimpleParentOrderEntity = SimpleParentOrderEntity;
class NewOrderRequestEntity {
    constructor(deliveryDate, deliveryTime) {
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
    }
}
exports.NewOrderRequestEntity = NewOrderRequestEntity;
class OrderItemEntity {
    constructor(id, childOrderId, product, price, quantity, quantityChecked) {
        this.id = id;
        this.childOrderId = childOrderId;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.quantityChecked = quantityChecked;
    }
}
exports.OrderItemEntity = OrderItemEntity;
class ChildOrderEntity {
    constructor(id, parentOrder, state, deliveryPrice, evidenceImg, hasCustomerSupport, products) {
        this.id = id;
        this.parentOrder = parentOrder;
        this.state = state;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.hasCustomerSupport = hasCustomerSupport;
        this.products = products;
    }
}
exports.ChildOrderEntity = ChildOrderEntity;
class ChildOrder_AdminEntity {
    constructor(id, parentOrder, user, state, deliveryPrice, evidenceImg, hasCustomerSupport, products) {
        this.id = id;
        this.parentOrder = parentOrder;
        this.user = user;
        this.state = state;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.hasCustomerSupport = hasCustomerSupport;
        this.products = products;
    }
}
exports.ChildOrder_AdminEntity = ChildOrder_AdminEntity;
class SimpleChildOrderEntity {
    constructor(id, parentOrder, state, price, deliveryPrice, partnerInformation, hasCustomerSupport) {
        this.id = id;
        this.parentOrder = parentOrder;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.partnerInformation = partnerInformation;
        this.hasCustomerSupport = hasCustomerSupport;
    }
}
exports.SimpleChildOrderEntity = SimpleChildOrderEntity;
class SimpleChildOrder_PartnerEntity {
    constructor(id, parentOrder, state, price, deliveryPrice) {
        this.id = id;
        this.parentOrder = parentOrder;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
    }
}
exports.SimpleChildOrder_PartnerEntity = SimpleChildOrder_PartnerEntity;
class SimpleChildOrder_AdminEntity {
    constructor(id, parentOrder, user, state, price, deliveryPrice, evidenceImg, partnerInformation, hasCustomerSupport) {
        this.id = id;
        this.parentOrder = parentOrder;
        this.user = user;
        this.state = state;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        this.evidenceImg = evidenceImg;
        this.partnerInformation = partnerInformation;
        this.hasCustomerSupport = hasCustomerSupport;
    }
}
exports.SimpleChildOrder_AdminEntity = SimpleChildOrder_AdminEntity;
class OrderReportEntity {
    constructor(partnerId, gtin, name, quantity) {
        this.partnerId = partnerId;
        this.gtin = gtin;
        this.name = name;
        this.quantity = quantity;
    }
}
exports.OrderReportEntity = OrderReportEntity;
