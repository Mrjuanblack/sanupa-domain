import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser } from "./User";
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
export interface PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser;
    price: number;
    stock: number;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser;
    price: number;
    stock: number;
    constructor(product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser, price: number, stock: number);
}
