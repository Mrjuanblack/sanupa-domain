import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
export interface PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    price: number;
}
export declare class PartnerProductEntiy implements PartnerProduct {
    id: number;
    product: ProductWithCodeEntity | ProductWithoutCodeEntity;
    price: number;
    constructor(id: number, product: ProductWithCodeEntity | ProductWithoutCodeEntity, price: number);
}
