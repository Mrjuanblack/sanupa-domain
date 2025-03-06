import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser_WithPartnerInfoEntity } from "./User";
export interface NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number | null;
}
export declare class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number | null;
    constructor(productId: number, partnerId: number, price: number, stock: number | null);
}
export interface UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number | null;
}
export declare class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number | null;
    constructor(productId: number, partnerId: number, price: number, stock: number | null);
}
export interface SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
}
export declare class SimplePartnerProductEntity implements SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
    constructor(partner: SimpleUser_WithPartnerInfoEntity, price: number, stock: number | null);
}
export interface SimplePartnerProduct_HasUserZone {
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
}
export declare class SimplePartnerProduct_HasUserZoneEntity implements SimplePartnerProduct_HasUserZone {
    isInUserZone: boolean;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number | null;
    constructor(isInUserZone: boolean, partner: SimpleUser_WithPartnerInfoEntity, price: number, stock: number | null);
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
    subcategoryId: number | null;
    description: string | null;
    brand: string | null;
    name: string | null;
    zoneId: number | null;
    favorite: boolean;
    constructor(price: number | null, stock: number | null, subcategoryId: number | null, description: string | null, brand: string | null, name: string | null, zoneId: number | null, favorite: boolean);
}
