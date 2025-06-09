export interface ProductRequest {
    code: string;
    createdByUserId: number;
}
export declare class ProductRequestEntity implements ProductRequest {
    code: string;
    createdByUserId: number;
    constructor(code: string, createdByUserId: number);
}
export interface CreateProductRequestRequest {
    code: string;
    createdByUserId: number;
}
