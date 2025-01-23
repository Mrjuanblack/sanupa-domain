import { ProductWithCodeEntity, ProductWithoutCodeEntity } from "./Product";
import { SimpleUser } from "./User";
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
