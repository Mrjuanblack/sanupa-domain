import { PartnerProductEntiy } from "./PartnerProduct";
export interface Car {
    partnerProduct: PartnerProductEntiy;
    userId: number;
    quantity: number;
}
export declare class CarEntity implements Car {
    partnerProduct: PartnerProductEntiy;
    userId: number;
    quantity: number;
    constructor(partnerProduct: PartnerProductEntiy, userId: number, quantity: number);
}
export interface SimpleCar {
    productId: number;
    partnerId: number;
    userId: number;
    quantity: number;
}
export declare class SimpleCarEntity implements SimpleCar {
    productId: number;
    partnerId: number;
    userId: number;
    quantity: number;
    constructor(productId: number, partnerId: number, userId: number, quantity: number);
}
export interface NewCarRequest {
    productId: number;
    partnerId: number;
    quantity: number;
}
export declare class NewCarRequestEntity implements NewCarRequest {
    productId: number;
    partnerId: number;
    quantity: number;
    constructor(productId: number, partnerId: number, quantity: number);
}
