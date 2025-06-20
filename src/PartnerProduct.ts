import { NewPriceRequest, PriceEntity } from "./Price"
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
    internalCode: string | null;
    price: NewPriceRequest[]
    priceSubunit: number | null;
    stock: number | null;
}

export type UpdatePartnerProductRequest = {
    id: number
    price: NewPriceRequest[]
    stock: number | null;
}

export interface PartnerProduct_NotValidated {
    id: number
    partnerId: number
    product: ProductWithCodeEntity | ProductWithoutCodeEntity
}

export class PartnerProduct_NotValidatedEntity implements PartnerProduct_NotValidated {
    constructor(
        public id: number,
        public partnerId: number,
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity
    ) { }
}

export interface SimplePartnerProduct {
    id: number
    internalCode: string | null
    partner: SimpleUser_WithPartnerInfoEntity
    product: MutualExclusiveProductId
    priceSubunit: number | null
    stock: number | null
    price: PriceEntity[]
    active: boolean
}

export class SimplePartnerProductEntity implements SimplePartnerProduct {
    constructor(
        public id: number,
        public internalCode: string | null,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public product: MutualExclusiveProductId,
        public priceSubunit: number | null,
        public stock: number | null,
        public price: PriceEntity[],
        public active: boolean
    ) { }
}

export interface SimplePartnerProduct_HasUserZone {
    id: number
    internalCode: string | null
    isInUserZone: boolean
    partner: SimpleUser_WithPartnerInfoEntity
    priceSubunit: number | null
    stock: number | null
    price: PriceEntity[]
    active: boolean
}

export class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    constructor(
        public id: number,
        public internalCode: string | null,
        public isInUserZone: boolean,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public priceSubunit: number | null,
        public stock: number | null,
        public price: PriceEntity[],
        public active: boolean
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
    internalCode: string | null,
    product: ProductWithCodeEntity | ProductWithoutCodeEntity,
    partner: SimpleUser_WithPartnerInfoEntity,
    priceSubunit: number | null,
    price: PriceEntity[],
    stock: number | null,
    active: boolean
}

export class PartnerProductEntiy implements PartnerProduct {
    constructor(
        public id: number,
        public internalCode: string | null,
        public product: ProductWithCodeEntity | ProductWithoutCodeEntity,
        public partner: SimpleUser_WithPartnerInfoEntity,
        public priceSubunit: number | null,
        public price: PriceEntity[],
        public stock: number | null,
        public active: boolean
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