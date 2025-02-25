import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser_WithPartnerInfoEntity } from "./User";
export interface NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number;
}
export declare class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number;
    constructor(productId: number, partnerId: number, price: number, stock: number);
}
export interface UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number;
}
export declare class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    stock: number;
    constructor(productId: number, partnerId: number, price: number, stock: number);
}
export interface SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number;
}
export declare class SimplePartnerProductEntity implements SimplePartnerProduct {
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number;
    constructor(partner: SimpleUser_WithPartnerInfoEntity, price: number, stock: number);
}
export interface ListPartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProductEntity[];
}
export declare class ListPartnerProductEntity implements ListPartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProducts: SimplePartnerProductEntity[];
    constructor(product: ProductWithCodeEntity | ProductWithoutCodeEntity, partnerProducts: SimplePartnerProductEntity[]);
}
export interface PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser_WithPartnerInfoEntity;
    price: number;
    stock: number;
    constructor(product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser_WithPartnerInfoEntity, price: number, stock: number);
}
export interface PP_Filter {
    price: number | null;
    stock: number | null;
    subcategoryId: number | null;
    description: string | null;
    brand: string | null;
    name: string | null;
    zoneId: number | null;
}
export declare class PP_FilterEntity implements PP_Filter {
    price: number | null;
    stock: number | null;
    subcategoryId: number | null;
    description: string | null;
    brand: string | null;
    name: string | null;
    zoneId: number | null;
    constructor(price: number | null, stock: number | null, subcategoryId: number | null, description: string | null, brand: string | null, name: string | null, zoneId: number | null);
}
