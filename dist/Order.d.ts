import { ZoneEntity } from "./Location";
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
export declare const isOrderEditable: (orderState: OrderState) => boolean;
export declare enum DeliveryTime {
    Morning = 1,
    MiddleDay = 2,
    Afternoon = 3
}
export declare const DeliveryTimeList: DeliveryTime[];
export declare function getDeliveryTimeString(deliveryTime: DeliveryTime): string;
export declare function getDeliveryMaxTimeString(deliveryTime: DeliveryTime): string;
export interface ParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    childOrders: ChildOrder[];
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
}
export declare class ParentOrderEntity implements ParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    childOrders: ChildOrder[];
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
    constructor(id: number, userId: number, name: string, address: string, zone: ZoneEntity, createdAt: Date, childOrders: ChildOrder[], deliveryDate: Date, deliveryTime: DeliveryTime);
}
export interface SimpleParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
}
export declare class SimpleParentOrderEntity implements SimpleParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    deliveryDate: Date;
    deliveryTime: DeliveryTime;
    constructor(id: number, userId: number, name: string, address: string, zone: ZoneEntity, createdAt: Date, deliveryDate: Date, deliveryTime: DeliveryTime);
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
    id: number;
    childOrderId: number;
    product: PartnerProductEntiy;
    price: number;
    quantity: number;
    quantityChecked: number;
}
export declare class OrderItemEntity implements OrderItem {
    id: number;
    childOrderId: number;
    product: PartnerProductEntiy;
    price: number;
    quantity: number;
    quantityChecked: number;
    constructor(id: number, childOrderId: number, product: PartnerProductEntiy, price: number, quantity: number, quantityChecked: number);
}
export interface ChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
}
export declare class ChildOrderEntity implements ChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, deliveryPrice: number, evidenceImg: string | null, hasCustomerSupport: boolean, products: OrderItemEntity[]);
}
export interface ChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
}
export declare class ChildOrder_AdminEntity implements ChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    constructor(id: number, parentOrder: SimpleParentOrderEntity, user: SimpleUserEntity, state: OrderState, deliveryPrice: number, evidenceImg: string | null, hasCustomerSupport: boolean, products: OrderItemEntity[]);
}
export interface SimpleChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
}
export declare class SimpleChildOrderEntity implements SimpleChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, price: number, deliveryPrice: number, partnerInformation: SimplePartnerInfoEntity, hasCustomerSupport: boolean);
}
export interface SimpleChildOrder_Partner {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
}
export declare class SimpleChildOrder_PartnerEntity implements SimpleChildOrder_Partner {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, price: number, deliveryPrice: number);
}
export interface SimpleChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
}
export declare class SimpleChildOrder_AdminEntity implements SimpleChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, user: SimpleUserEntity, state: OrderState, price: number, deliveryPrice: number, evidenceImg: string | null, partnerInformation: SimplePartnerInfoEntity, hasCustomerSupport: boolean);
}
export interface OrderReport {
    partnerId: number;
    gtin: string | null;
    name: string;
    quantity: number;
}
export declare class OrderReportEntity implements OrderReport {
    partnerId: number;
    gtin: string | null;
    name: string;
    quantity: number;
    constructor(partnerId: number, gtin: string | null, name: string, quantity: number);
}
