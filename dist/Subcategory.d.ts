export interface Subcategory {
    id: number;
    categoryId: number;
    name: string;
    imgPath: string | null;
    active: boolean;
}
export interface NewSubcategoryRequest {
    categoryId: number;
    name: string;
}
export declare class SubcategoryEntity implements Subcategory {
    id: number;
    categoryId: number;
    name: string;
    imgPath: string | null;
    active: boolean;
    constructor(id: number, categoryId: number, name: string, imgPath: string | null, active: boolean);
}
