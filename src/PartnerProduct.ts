import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"
import { SimpleUser } from "./User"

export interface NewPartnerProductRequest {
    productId: number,
    partnerId: number,
    price: number,
    stock: number
}

export class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number,
        public stock: number
    ) { }
}

export interface UpdatePartnerProductRequest {
    productId: number,
    partnerId: number,
    price: number,
    stock: number
}

export class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number,
        public stock: number
    ) { }
}

export interface PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partner: SimpleUser
    price: number,
    stock: number
}

export class PartnerProductEntiy implements PartnerProduct {
    constructor(
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partner: SimpleUser,
        public price: number,
        public stock: number
    ) { }
}