import { PriceEntity } from "./Price";
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser_WithPartnerInfoEntity } from "./User";
export type NewPartnerProductRequest = {
    productId: number;
    productWithoutCodeId: null;
    partnerId: number;
    priceSubunit: number | null;
    stock: number | null;
} | {
    productId: null;
    productWithoutCodeId: number;
    partnerId: number;
    priceSubunit: number | null;
    stock: number | null;
};
export type UpdatePartnerProductRequest = {
    productId: number;
    productWithoutCodeId: null;
    partnerId: number;
    priceSubunit: number | null;
    stock: number | null;
} | {
    productId: null;
    productWithoutCodeId: number;
    partnerId: number;
    priceSubunit: number | null;
    stock: number | null;
};
export interface SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
}
export declare class SimplePartnerProductEntity implements SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    constructor(partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, stock: number | null, price: PriceEntity[]);
}
export interface SimplePartnerProduct_HasUserZone {
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
}
export declare class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    constructor(isInUserZone: boolean, partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, stock: number | null, price: PriceEntity[]);
}
export interface ListPartnerProduct {
    favorite: boolean;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProductEntity[];
}
export declare class ListPartnerProductEntity implements ListPartnerProduct {
    favorite: boolean;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProduct_HasUserZoneEntity[];
    constructor(favorite: boolean, product: ProductWithCodeEntity | ProductWithoutCodeEntity, partnerProducts: SimplePartnerProduct_HasUserZoneEntity[]);
}
export interface PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
    constructor(product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser_WithPartnerInfoEntity, price: number, stock: number | null);
}
export interface PP_Filter {
    price: number | null;
    stock: number | null;
    categoryId: number | null;
    subcategoryId: number | null;
    description: string | null;
    brand: string | null;
    name: string | null;
    zoneId: number | null;
    favorite: boolean;
}
export declare class PP_FilterEntity implements PP_Filter {
    price: number | null;
    stock: number | null;
    categoryId: number | null;
    subcategoryId: number | null;
    description: string | null;
    brand: string | null;
    name: string | null;
    zoneId: number | null;
    favorite: boolean;
    constructor(price: number | null, stock: number | null, categoryId: number | null, subcategoryId: number | null, description: string | null, brand: string | null, name: string | null, zoneId: number | null, favorite: boolean);
}
