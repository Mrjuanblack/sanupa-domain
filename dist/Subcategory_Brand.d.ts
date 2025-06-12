export interface SubcategoryBrand {
    id: number;
    subcategoryId: number;
    name: string;
}
export interface SubcategoryBrandWithProductsCount extends SubcategoryBrand {
    productsCount: number;
}
export interface NewSubcategorBrandRequest {
    subcategoryId: number;
    name: string;
}
export interface UpdateSubcateogryBrandRequest {
    name: string;
}
export declare class SubcategoryBrandEntity implements SubcategoryBrand {
    id: number;
    subcategoryId: number;
    name: string;
    constructor(id: number, subcategoryId: number, name: string);
}
export declare class SubcategoryBrandWithProductsCountEntity implements SubcategoryBrandWithProductsCount {
    id: number;
    subcategoryId: number;
    name: string;
    productsCount: number;
    constructor(id: number, subcategoryId: number, name: string, productsCount: number);
}
export interface SubcategoryBrand_Suggestion {
    id: number;
    subcategoryId: number;
    name: string;
    createdBy: number;
}
export interface NewSubcategoryBrand_SuggestionRequest {
    subcategoryId: number;
    name: string;
    createdBy: number;
}
export declare class SubcategoryBrand_SuggestionEntity implements SubcategoryBrand_Suggestion {
    id: number;
    subcategoryId: number;
    name: string;
    createdBy: number;
    constructor(id: number, subcategoryId: number, name: string, createdBy: number);
}
