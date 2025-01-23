import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"
import { SimpleUser } from "./User"

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
    ) {}
}