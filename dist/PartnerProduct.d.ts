import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser } from "./User";
export interface NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
}
export declare class NewPartnerProductRequestEntity implements NewPartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    constructor(productId: number, partnerId: number, price: number);
}
export interface UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
}
export declare class UpdatePartnerProductRequestEntity implements UpdatePartnerProductRequest {
    productId: number;
    partnerId: number;
    price: number;
    constructor(productId: number, partnerId: number, price: number);
}
export interface PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser;
    price: number;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partner: SimpleUser;
    price: number;
    constructor(id: number, product: ProductWithCodeEntity | ProductWithoutCodeEntity, partner: SimpleUser, price: number);
}
