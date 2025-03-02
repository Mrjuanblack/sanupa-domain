import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"
import { SimpleUser, SimpleUser_WithPartnerInfoEntity } from "./User"

export interface NewPartnerProductRequest {
    productId: number
    partnerId: number
    price: number
    stock: number | null
}

export class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number,
        public stock: number | null
    ) { }
}

export interface UpdatePartnerProductRequest {
    productId: number
    partnerId: number
    price: number
    stock: number | null
}

export class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    constructor(
        public productId: number,
        public partnerId: number,
        public price: number,
        public stock: number | null
    ) { }
}

export interface SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity
    price: number
    stock: number | null
}

export class SimplePartnerProductEntity implements SimplePartnerProduct {
    constructor(
        public partner: SimpleUser_WithPartnerInfoEntity,
        public price: number,
        public stock: number | null
    ) { }
}

export interface SimplePartnerProduct_HasUserZone {
    isInUserZone: boolean
    partner: SimpleUser_WithPartnerInfoEntity
    price: number
    stock: number | null
}

export class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    constructor(
        public isInUserZone: boolean,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public price: number,
        public stock: number | null
    ) { }
}

export interface ListPartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partnerProducts: SimplePartnerProductEntity[]
}

export class ListPartnerProductEntity implements ListPartnerProduct {
    constructor(
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partnerProducts: SimplePartnerProductEntity[]
    ) { }
}

export interface PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partner: SimpleUser_WithPartnerInfoEntity
    price: number,
    stock: number | null
}

export class PartnerProductEntiy implements PartnerProduct {
    constructor(
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public price: number,
        public stock: number | null
    ) { }
}

// Filter for searching products
export interface PP_Filter {
    price: number | null
    stock: number | null

    subcategoryId: number | null

    // shared fields
    description: string | null
    brand: string | null
    // For products with code

    // For products without code
    name: string | null

    // For filtering products that are available to the user's zone
    zoneId: number | null
}

export class PP_FilterEntity implements PP_Filter {
    constructor(
        public price: number | null,
        public stock: number | null,
        public subcategoryId: number | null,
        public description: string | null,
        public brand: string | null,
        public name: string | null,
        public zoneId: number | null
    ) { }
}