export interface Category {
    id: number;
    name: string;
    imgPath: string | null;
    active: boolean;
}
export interface NewCategoryRequest {
    name: string;
}
export declare class CategoryEntity implements Category {
    id: number;
    name: string;
    imgPath: string | null;
    active: boolean;
    constructor(id: number, name: string, imgPath: string | null, active: boolean);
}
