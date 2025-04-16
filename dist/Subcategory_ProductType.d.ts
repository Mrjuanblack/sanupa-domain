export interface SubcategoryProductType {
    id: number;
    subcategoryId: number;
    name: string;
}
export interface SubcategoryProductTypeWithProductsCount extends SubcategoryProductType {
    productsCount: number;
}
export interface NewSubcategorProductTypeRequest {
    subcategoryId: number;
    name: string;
}
export interface UpdateSubcateogryProductTypeRequest {
    name: string;
}
export declare class SubcategoryProductTypeEntity implements SubcategoryProductType {
    id: number;
    subcategoryId: number;
    name: string;
    constructor(id: number, subcategoryId: number, name: string);
}
export declare class SubcategoryProductTypeWithProductsCountEntity implements SubcategoryProductTypeWithProductsCount {
    id: number;
    subcategoryId: number;
    name: string;
    productsCount: number;
    constructor(id: number, subcategoryId: number, name: string, productsCount: number);
}
