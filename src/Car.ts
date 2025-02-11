import { PartnerProductEntiy, SimplePartnerProduct } from "./PartnerProduct"
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"

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