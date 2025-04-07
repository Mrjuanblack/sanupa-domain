export interface SubcategoryBrand {
    id: number;
    subcategoryId: number;
    name: string;
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
