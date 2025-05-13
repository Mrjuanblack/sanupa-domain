import { PriceEntity } from "./Price";
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser_WithPartnerInfoEntity } from "./User";
export type MutualExclusiveProductId = {
    productId: number;
    productWithoutCodeId: null;
} | {
    productId: null;
    productWithoutCodeId: number;
};
export interface NewPartnerProductRequest {
    product: MutualExclusiveProductId;
    partnerId: number;
    price: {
        min: number;
        max: number;
        price: number;
    }[];
    priceSubunit: number | null;
    stock: number | null;
}
export type UpdatePartnerProductRequest = {
    id: number;
    priceSubunit: number | null;
    stock: number | null;
};
export interface SimplePartnerProduct {
    id: number;
    partner: SimpleUser_WithPartnerInfoEntity;
    product: MutualExclusiveProductId;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
}
export declare class SimplePartnerProductEntity implements SimplePartnerProduct {
    id: number;
    partner: SimpleUser_WithPartnerInfoEntity;
    product: MutualExclusiveProductId;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    constructor(id: number, partner: SimpleUser_WithPartnerInfoEntity, product: MutualExclusiveProductId, priceSubunit: number | null, stock: number | null, price: PriceEntity[]);
}
export interface SimplePartnerProduct_HasUserZone {
    id: number;
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
}
export declare class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    id: number;
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    constructor(id: number, isInUserZone: boolean, partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, stock: number | null, price: PriceEntity[]);
}
export interface ListPartnerProduct {
    favorite: boolean;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProduct_HasUserZoneEntity[];
}
export declare class ListPartnerProductEntity implements ListPartnerProduct {
    favorite: boolean;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProduct_HasUserZoneEntity[];
    constructor(favorite: boolean, product: ProductWithCodeEntity | ProductWithoutCodeEntity, partnerProducts: SimplePartnerProduct_HasUserZoneEntity[]);
}
export interface PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    price: PriceEntity[];
    stock: number | null;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    price: PriceEntity[];
    stock: number | null;
    constructor(id: number, product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, price: PriceEntity[], stock: number | null);
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
