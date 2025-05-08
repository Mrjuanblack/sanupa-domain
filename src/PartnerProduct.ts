import { PriceEntity } from "./Price"
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product"
import { SimpleUser_WithPartnerInfoEntity } from "./User"

export type MutualExclusiveProductId = {
    productId: number
    productWithoutCodeId: null
} | {
    productId: null
    productWithoutCodeId: number
}

export interface NewPartnerProductRequest {
    product: MutualExclusiveProductId
    partnerId: number;
    priceSubunit: number | null;
    stock: number | null;
}

export type UpdatePartnerProductRequest = {
    id: number
    priceSubunit: number | null;
    stock: number | null;
}

export interface SimplePartnerProduct {
    id: number
    partner: SimpleUser_WithPartnerInfoEntity
    product: MutualExclusiveProductId
    priceSubunit: number | null
    stock: number | null
    price: PriceEntity[]
}

export class SimplePartnerProductEntity implements SimplePartnerProduct {
    constructor(
        public id: number,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public product: MutualExclusiveProductId,
        public priceSubunit: number | null,
        public stock: number | null,
        public price: PriceEntity[]
    ) { }
}

export interface SimplePartnerProduct_HasUserZone {
    id: number
    isInUserZone: boolean
    partner: SimpleUser_WithPartnerInfoEntity
    priceSubunit: number | null
    stock: number | null
    price: PriceEntity[]
}

export class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    constructor(
        public id: number,
        public isInUserZone: boolean,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public priceSubunit: number | null,
        public stock: number | null,
        public price: PriceEntity[]
    ) { }
}

export interface ListPartnerProduct {
    favorite: boolean
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partnerProducts: SimplePartnerProduct_HasUserZoneEntity[]
}

export class ListPartnerProductEntity implements ListPartnerProduct {
    constructor(
        public favorite: boolean,
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partnerProducts: SimplePartnerProduct_HasUserZoneEntity[]
    ) { }
}

export interface PartnerProduct {
    id: number,
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partner: SimpleUser_WithPartnerInfoEntity,
    priceSubunit: number | null,
    price: PriceEntity[],
    stock: number | null
}

export class PartnerProductEntiy implements PartnerProduct {
    constructor(
        public id: number,
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public priceSubunit: number | null,
        public price: PriceEntity[],
        public stock: number | null
    ) { }
}

// Filter for searching products
export interface PP_Filter {
    price: number | null
    stock: number | null

    categoryId: number | null
    subcategoryId: number | null

    // shared fields
    description: string | null
    brand: string | null
    // For products with code

    // For products without code
    name: string | null

    // For filtering products that are available to the user's zone
    zoneId: number | null

    // For filtering by favorite products
    favorite: boolean
}

export class PP_FilterEntity implements PP_Filter {
    constructor(
        public price: number | null,
        public stock: number | null,
        public categoryId: number | null,
        public subcategoryId: number | null,
        public description: string | null,
        public brand: string | null,
        public name: string | null,
        public zoneId: number | null,
        public favorite: boolean,
    ) { }
}