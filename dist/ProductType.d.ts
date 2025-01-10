export interface ProductType {
    id: number;
    name: string;
}
export interface NewProductTypeRequest {
    name: string;
}
export declare class ProductTypeEntity implements ProductType {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
