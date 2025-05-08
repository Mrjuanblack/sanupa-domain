import { PartnerProductEntiy, SimplePartnerProductEntity } from "./PartnerProduct";
import { SimpleUser_WithPartnerInfo } from "./User";
export interface Car {
    partnerProduct: PartnerProductEntiy;
    userId: number;
    quantity: number;
    active: boolean;
}
export declare class CarEntity implements Car {
    partnerProduct: PartnerProductEntiy;
    userId: number;
    quantity: number;
    active: boolean;
    constructor(partnerProduct: PartnerProductEntiy, userId: number, quantity: number, active: boolean);
}
export interface SimpleCar {
    partnerProduct: SimplePartnerProductEntity;
    userId: number;
    quantity: number;
    active: boolean;
}
export declare class SimpleCarEntity implements SimpleCar {
    partnerProduct: SimplePartnerProductEntity;
    userId: number;
    quantity: number;
    active: boolean;
    constructor(partnerProduct: SimplePartnerProductEntity, userId: number, quantity: number, active: boolean);
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
    partnerProductId: number;
    quantity: number;
}
export declare class NewCarRequestEntity implements NewCarRequest {
    partnerProductId: number;
    quantity: number;
    constructor(partnerProductId: number, quantity: number);
}
