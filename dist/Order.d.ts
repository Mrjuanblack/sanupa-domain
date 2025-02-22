import { SimplePartnerProductEntity } from "./PartnerProduct";
declare enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,
    Cancelled = 99
}
interface ParentOrder {
    id: number;
    createdAt: Date;
    childOrders: ChildOrder[];
}
export declare class ParentOrderEntity implements ParentOrder {
    id: number;
    createdAt: Date;
    childOrders: ChildOrder[];
    constructor(id: number, createdAt: Date, childOrders: ChildOrder[]);
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
