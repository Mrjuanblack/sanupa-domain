import { SimplePartnerInfoEntity } from "./PartnerInfo";
import { PartnerProductEntiy } from "./PartnerProduct";
export declare enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,
    Finished = 98,
    Cancelled = 99
}
export declare const OrderStateList: OrderState[];
export declare function getOrderStateString(orderState: OrderState): string;
export declare enum DeliveryTime {
    Morning = 1,
    MiddleDay = 2,
    Afternoon = 3
}
export declare const DeliveryTimeList: DeliveryTime[];
export declare function getDeliveryTimeString(deliveryTime: DeliveryTime): string;
export interface ParentOrder {
    id: number;
    userId: number;
    createdAt: Date;
    childOrders: ChildOrder[];
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
}
export declare class ParentOrderEntity implements ParentOrder {
    id: number;
    userId: number;
    createdAt: Date;
    childOrders: ChildOrder[];
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
    constructor(id: number, userId: number, createdAt: Date, childOrders: ChildOrder[], deliveryDate: Date, deliveryTime: DeliveryTime);
}
export interface NewOrderRequest {
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
}
export declare class NewOrderRequestEntity implements NewOrderRequest {
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
    constructor(deliveryDate: Date, deliveryTime: DeliveryTime);
}
export interface ChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    products: PartnerProductEntiy[];
}
export declare class ChildOrderEntity implements ChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    products: PartnerProductEntiy[];
    constructor(id: number, parentOrderId: number, state: OrderState, price: number, deliveryPrice: number, products: PartnerProductEntiy[]);
}
export interface SimpleChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    partnerInformation: SimplePartnerInfoEntity;
}
export declare class SimpleChildOrderEntity implements SimpleChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    partnerInformation: SimplePartnerInfoEntity;
    constructor(id: number, parentOrderId: number, state: OrderState, price: number, deliveryPrice: number, partnerInformation: SimplePartnerInfoEntity);
}
