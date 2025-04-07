export interface SubcategoryProductType {
    id: number
    subcategoryId: number
    name: string
}

export interface NewSubcategorProductTypeRequest {
    subcategoryId: number
    name: string
}

export interface UpdateSubcateogryProductTypeRequest {
    name: string
}

export class SubcategoryProductTypeEntity implements SubcategoryProductType {
    constructor(public id: number, public subcategoryId: number, public name: string) { }
}