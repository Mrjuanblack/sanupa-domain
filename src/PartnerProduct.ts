import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"
import { SimpleUser } from "./User"

export interface NewPartnerProductRequest {
    productId: number,
    partnerId: number,
    price: number
}

export class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number
    ) { }
}

export interface UpdatePartnerProductRequest {
    productId: number,
    partnerId: number,
    price: number
}

export class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number
    ) { }
}

export interface PartnerProduct {
    id: number
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partner: SimpleUser
    price: number
}

export class PartnerProductEntiy implements PartnerProduct {
    constructor(
        public id: number,
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partner: SimpleUser,
        public price: number
    ) { }
}