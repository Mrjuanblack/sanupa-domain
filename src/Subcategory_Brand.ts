export interface SubcategoryBrand {
    id: number
    subcategoryId: number
    name: string
}

export interface NewSubcategorBrandRequest {
    subcategoryId: number
    name: string
}

export interface UpdateSubcateogryBrandRequest {
    name: string
}

export class SubcategoryBrandEntity implements SubcategoryBrand {
    constructor(public id: number, public subcategoryId: number, public name: string) { }
}