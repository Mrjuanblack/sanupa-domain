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
export interface SubcategoryProductType_Suggestion {
    id: number;
    subcategoryId: number;
    name: string;
    createdBy: number;
}
export interface NewSubcategorProductType_SuggestionRequest {
    subcategoryId: number;
    name: string;
    createdBy: number;
}
export declare class SubcategoryProductType_SuggestionEntity implements SubcategoryProductType_Suggestion {
    id: number;
    subcategoryId: number;
    name: string;
    createdBy: number;
    constructor(id: number, subcategoryId: number, name: string, createdBy: number);
}
