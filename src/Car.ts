import { PartnerProductEntiy, SimplePartnerProductEntity } from "./PartnerProduct"
import { SimpleUser_WithPartnerInfo } from "./User"

export interface Car {
    // Partner Product Data
    partnerProduct: PartnerProductEntiy,

    // Car Data
    userId: number,
    quantity: number,
    active: boolean
}

export class CarEntity implements Car {
    constructor(
        public partnerProduct: PartnerProductEntiy,
        public userId: number,
        public quantity: number,
        public active: boolean
    ) { }
}

export interface SimpleCar {
    partnerProduct: SimplePartnerProductEntity,
    productId: number,
    userId: number,
    quantity: number,
    active: boolean
}

export class SimpleCarEntity implements SimpleCar {
    constructor(
        public partnerProduct: SimplePartnerProductEntity,
        public productId: number,
        public userId: number,
        public quantity: number,
        public active: boolean
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
    partnerProductId: number,

    // Car Data
    // userId: number, // This will be fetched from the user token
    quantity: number,
}

export class NewCarRequestEntity implements NewCarRequest {
    constructor(
        public partnerProductId: number,
        // public userId: number,
        public quantity: number
    ) { }
}