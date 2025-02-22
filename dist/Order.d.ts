import { SimplePartnerProductEntity } from "./PartnerProduct";
declare enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,
    Cancelled = 99
}
declare enum DeliveryTime {
    Morning = 1,
    MiddleDay = 2,
    Afternoon = 3
}
interface ParentOrder {
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
interface ChildOrder {
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
export {};
