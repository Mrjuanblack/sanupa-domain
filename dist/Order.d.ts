import { ZoneEntity } from "./Location";
import { SimplePartnerInfoEntity } from "./PartnerInfo";
import { PartnerProductEntiy } from "./PartnerProduct";
import { TimeRangeEntity } from "./TimeRange";
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
export interface ParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    childOrders: ChildOrder[];
    deliveryDate: Date;
    deliveryTime: TimeRangeEntity;
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
    deliveryTime: TimeRangeEntity;
    constructor(id: number, userId: number, name: string, address: string, zone: ZoneEntity, createdAt: Date, childOrders: ChildOrder[], deliveryDate: Date, deliveryTime: TimeRangeEntity);
}
export interface SimpleParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    deliveryDate: Date;
    deliveryTime: TimeRangeEntity;
}
export declare class SimpleParentOrderEntity implements SimpleParentOrder {
    id: number;
    userId: number;
    name: string;
    address: string;
    zone: ZoneEntity;
    createdAt: Date;
    deliveryDate: Date;
    deliveryTime: TimeRangeEntity;
    constructor(id: number, userId: number, name: string, address: string, zone: ZoneEntity, createdAt: Date, deliveryDate: Date, deliveryTime: TimeRangeEntity);
}
export interface NewOrderRequest {
    deliveryDate: Date;
    deliveryTimeId: number;
}
export declare class NewOrderRequestEntity implements NewOrderRequest {
    deliveryDate: Date;
    deliveryTimeId: number;
    constructor(deliveryDate: Date, deliveryTimeId: number);
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
export interface ChildOrder_MonthlyOverview {
    datePeriod: Date;
    totalChildOrders: number;
    totalIncome: number;
    totalIncomDelivery: number;
}
export declare class ChildOrder_MonthlyOverviewEntity implements ChildOrder_MonthlyOverview {
    datePeriod: Date;
    totalChildOrders: number;
    totalIncome: number;
    totalIncomDelivery: number;
    constructor(datePeriod: Date, totalChildOrders: number, totalIncome: number, totalIncomDelivery: number);
}
export interface ChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    updatedAt: Date;
    rating: number | null;
}
export declare class ChildOrderEntity implements ChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    deliveryPrice: number;
    evidenceImg: string | null;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    updatedAt: Date;
    rating: number | null;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, deliveryPrice: number, evidenceImg: string | null, deliveryUserId: number | null, deliveryUserAccepted: boolean, hasCustomerSupport: boolean, products: OrderItemEntity[], updatedAt: Date, rating: number | null);
}
export interface ChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    updatedAt: Date;
    rating: number | null;
}
export declare class ChildOrder_AdminEntity implements ChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    evidenceImg: string | null;
    hasCustomerSupport: boolean;
    products: OrderItemEntity[];
    updatedAt: Date;
    rating: number | null;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, user: SimpleUserEntity, state: OrderState, deliveryPrice: number, deliveryUserId: number | null, deliveryUserAccepted: boolean, evidenceImg: string | null, hasCustomerSupport: boolean, products: OrderItemEntity[], updatedAt: Date, rating: number | null);
}
export interface SimpleChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    updatedAt: Date;
    rating: number | null;
}
export declare class SimpleChildOrderEntity implements SimpleChildOrder {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    updatedAt: Date;
    rating: number | null;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, price: number, deliveryPrice: number, deliveryUserId: number | null, deliveryUserAccepted: boolean, partnerInformation: SimplePartnerInfoEntity, hasCustomerSupport: boolean, updatedAt: Date, rating: number | null);
}
export interface SimpleChildOrder_Partner {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserAccepted: boolean;
    deliveryUserId: number | null;
    updatedAt: Date;
    rating: number | null;
}
export declare class SimpleChildOrder_PartnerEntity implements SimpleChildOrder_Partner {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserAccepted: boolean;
    deliveryUserId: number | null;
    updatedAt: Date;
    rating: number | null;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, state: OrderState, price: number, deliveryPrice: number, deliveryUserAccepted: boolean, deliveryUserId: number | null, updatedAt: Date, rating: number | null);
}
export interface SimpleChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    updatedAt: Date;
    rating: number | null;
}
export declare class SimpleChildOrder_AdminEntity implements SimpleChildOrder_Admin {
    id: number;
    parentOrder: SimpleParentOrderEntity;
    user: SimpleUserEntity;
    state: OrderState;
    price: number;
    deliveryPrice: number;
    deliveryUserId: number | null;
    deliveryUserAccepted: boolean;
    evidenceImg: string | null;
    partnerInformation: SimplePartnerInfoEntity;
    hasCustomerSupport: boolean;
    updatedAt: Date;
    rating: number | null;
    constructor(id: number, parentOrder: SimpleParentOrderEntity, user: SimpleUserEntity, state: OrderState, price: number, deliveryPrice: number, deliveryUserId: number | null, deliveryUserAccepted: boolean, evidenceImg: string | null, partnerInformation: SimplePartnerInfoEntity, hasCustomerSupport: boolean, updatedAt: Date, rating: number | null);
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
