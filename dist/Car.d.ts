import { PartnerProductEntiy, SimplePartnerProductEntity } from "./PartnerProduct";
import { SimpleUser_WithPartnerInfo } from "./User";
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
    partnerProduct: SimplePartnerProductEntity;
    productId: number;
    userId: number;
    quantity: number;
}
export declare class SimpleCarEntity implements SimpleCar {
    partnerProduct: SimplePartnerProductEntity;
    productId: number;
    userId: number;
    quantity: number;
    constructor(partnerProduct: SimplePartnerProductEntity, productId: number, userId: number, quantity: number);
}
export interface DeliveryCost {
    partner: SimpleUser_WithPartnerInfo;
    price: number;
}
export declare class DeliveryCostEntity implements DeliveryCost {
    partner: SimpleUser_WithPartnerInfo;
    price: number;
    constructor(partner: SimpleUser_WithPartnerInfo, price: number);
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
