import { SimplePartnerProduct } from "./PartnerProduct"
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"

export interface Car {
    // Partner Product Data
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partnerProduct: SimplePartnerProduct,

    // Car Data
    userId: number,
    quantity: number
}

export class CarEntity implements Car {
    constructor(
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partnerProduct: SimplePartnerProduct,
        public userId: number,
        public quantity: number
    ) { }
}

export interface NewCarRequest {
    // Partner Product Data
    productId: number,
    partnerId: number,

    // Car Data
    userId: number,
    quantity: number,
}

export class NewCarRequestEntity implements NewCarRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public userId: number,
        public quantity: number,
    ) { }
}