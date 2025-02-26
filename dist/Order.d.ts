import { SimplePartnerInfoEntity } from "./PartnerInfo";
import { PartnerProductEntiy } from "./PartnerProduct";
import { SimpleUserEntity } from "./User";
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
export interface OrderItem {
    product: PartnerProductEntiy;
    quantity: number;
    checked: boolean;
}
export declare class OrderItemEntity implements OrderItem {
    product: PartnerProductEntiy;
    quantity: number;
    checked: boolean;
    constructor(product: PartnerProductEntiy, quantity: number, checked: boolean);
}
export interface ChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    products: OrderItemEntity[];
}
export declare class ChildOrderEntity implements ChildOrder {
    id: number;
    parentOrderId: number;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    products: OrderItemEntity[];
    constructor(id: number, parentOrderId: number, state: OrderState, price: number, deliveryPrice: number, evidenceImg: string | null, products: OrderItemEntity[]);
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
export interface SimpleChildOrder_Admin {
    id: number;
    parentOrderId: number;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
}
export declare class SimpleChildOrder_AdminEntity implements SimpleChildOrder_Admin {
    id: number;
    parentOrderId: number;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
    constructor(id: number, parentOrderId: number, user: SimpleUserEntity, state: OrderState, price: number, deliveryPrice: number, evidenceImg: string | null, partnerInformation: SimplePartnerInfoEntity);
}
