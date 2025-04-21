export interface SubcategorySubunitType {
    id: number;
    subcategoryId: number;
    name: string;
}
export interface SubcategorySubunitTypeWithProductsCount extends SubcategorySubunitType {
    productsCount: number;
}
export interface NewSubcategorySubunitTypeRequest {
    subcategoryId: number;
    name: string;
}
export interface UpdateSubcateogrySubunitTypeRequest {
    name: string;
}
export declare class SubcategorySubunitTypeEntity implements SubcategorySubunitType {
    id: number;
    subcategoryId: number;
    name: string;
    constructor(id: number, subcategoryId: number, name: string);
}
export declare class SubcategorySubunitTypeWithProductsCountEntity implements SubcategorySubunitTypeWithProductsCount {
    id: number;
    subcategoryId: number;
    name: string;
    productsCount: number;
    constructor(id: number, subcategoryId: number, name: string, productsCount: number);
}
