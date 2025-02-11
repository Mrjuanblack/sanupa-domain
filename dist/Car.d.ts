import { SimplePartnerProduct } from "./PartnerProduct";
import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
export interface Car {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProduct: SimplePartnerProduct;
    userId: number;
    quantity: number;
}
export declare class CarEntity implements Car {
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    partnerProduct: SimplePartnerProduct;
    userId: number;
    quantity: number;
    constructor(product: ProductWithCodeEntity | ProductWithoutCodeEntity, partnerProduct: SimplePartnerProduct, userId: number, quantity: number);
}
export interface NewCarRequest {
    productId: number;
    partnerId: number;
    userId: number;
    quantity: number;
}
export declare class NewCarRequestEntity implements NewCarRequest {
    productId: number;
    partnerId: number;
    userId: number;
    quantity: number;
    constructor(productId: number, partnerId: number, userId: number, quantity: number);
}
