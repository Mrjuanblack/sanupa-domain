import { PartnerProductEntiy, SimplePartnerProductEntity } from "./PartnerProduct"
import { SimpleUser_WithPartnerInfo } from "./User"

export interface Car {
    // Partner Product Data
    partnerProduct: PartnerProductEntiy,

    // Car Data
    userId: number,
    quantity: number
}

export class CarEntity implements Car {
    constructor(
        public partnerProduct: PartnerProductEntiy,
        public userId: number,
        public quantity: number
    ) { }
}

export interface SimpleCar {
    partnerProduct: SimplePartnerProductEntity,
    productId: number,
    userId: number,
    quantity: number
}

export class SimpleCarEntity implements SimpleCar {
    constructor(
        public partnerProduct: SimplePartnerProductEntity,
        public productId: number,
        public userId: number,
        public quantity: number,
    ) { }
}

export interface DeliveryCost {
    partner: SimpleUser_WithPartnerInfo
    price: number
}

export class DeliveryCostEntity implements DeliveryCost {
    constructor(
        public partner: SimpleUser_WithPartnerInfo,
        public price: number,
    ) { }
}

export interface NewCarRequest {
    // Partner Product Data
    productId: number,
    partnerId: number,

    // Car Data
    // userId: number, // This will be fetched from the user token
    quantity: number,
}

export class NewCarRequestEntity implements NewCarRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        // public userId: number,
        public quantity: number
    ) { }
}