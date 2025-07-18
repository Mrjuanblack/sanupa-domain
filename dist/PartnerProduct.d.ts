import { NewPriceRequest, PriceEntity } from "./Price";
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
    internalCode: string | null;
    price: NewPriceRequest[];
    priceSubunit: number | null;
    stock: number | null;
}
export type UpdatePartnerProductRequest = {
    id: number;
    price: NewPriceRequest[];
    stock: number | null;
};
export interface PartnerProduct_NotValidated {
    id: number;
    partnerId: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
}
export declare class PartnerProduct_NotValidatedEntity implements PartnerProduct_NotValidated {
    id: number;
    partnerId: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    constructor(id: number, partnerId: number, product: ProductWithCodeEntity | ProductWithoutCodeEntity);
}
export interface SimplePartnerProduct {
    id: number;
    internalCode: string | null;
    partner: SimpleUser_WithPartnerInfoEntity;
    product: MutualExclusiveProductId;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    active: boolean;
}
export declare class SimplePartnerProductEntity implements SimplePartnerProduct {
    id: number;
    internalCode: string | null;
    partner: SimpleUser_WithPartnerInfoEntity;
    product: MutualExclusiveProductId;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    active: boolean;
    constructor(id: number, internalCode: string | null, partner: SimpleUser_WithPartnerInfoEntity, product: MutualExclusiveProductId, priceSubunit: number | null, stock: number | null, price: PriceEntity[], active: boolean);
}
export interface SimplePartnerProduct_HasUserZone {
    id: number;
    internalCode: string | null;
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    active: boolean;
}
export declare class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    id: number;
    internalCode: string | null;
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    stock: number | null;
    price: PriceEntity[];
    active: boolean;
    constructor(id: number, internalCode: string | null, isInUserZone: boolean, partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, stock: number | null, price: PriceEntity[], active: boolean);
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
    internalCode: string | null;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    price: PriceEntity[];
    stock: number | null;
    active: boolean;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    id: number;
    internalCode: string | null;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    priceSubunit: number | null;
    price: PriceEntity[];
    stock: number | null;
    active: boolean;
    constructor(id: number, internalCode: string | null, product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser_WithPartnerInfoEntity, priceSubunit: number | null, price: PriceEntity[], stock: number | null, active: boolean);
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
