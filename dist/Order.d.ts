import { SimplePartnerInfoEntity } from "./PartnerInfo";
import { SimplePartnerProductEntity } from "./PartnerProduct";
export declare enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,
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
export interface ChildOrder {
    parentOrderId: number;
    state: OrderState;
    price: number;
    products: SimplePartnerProductEntity[];
}
export declare class ChildOrderEntity implements ChildOrder {
    parentOrderId: number;
    state: OrderState;
    price: number;
    products: SimplePartnerProductEntity[];
    constructor(parentOrderId: number, state: OrderState, price: number, products: SimplePartnerProductEntity[]);
}
export interface SimpleChildOrder {
    parentOrderId: number;
    state: OrderState;
    price: number;
    partnerInformation: SimplePartnerInfoEntity;
}
export declare class SimpleChildOrderEntity implements SimpleChildOrder {
    parentOrderId: number;
    state: OrderState;
    price: number;
    partnerInformation: SimplePartnerInfoEntity;
    constructor(parentOrderId: number, state: OrderState, price: number, partnerInformation: SimplePartnerInfoEntity);
}
