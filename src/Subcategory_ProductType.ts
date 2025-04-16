export interface SubcategoryProductType {
    id: number
    subcategoryId: number
    name: string
}

export interface SubcategoryProductTypeWithProductsCount extends SubcategoryProductType {
    productsCount: number
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

export class SubcategoryProductTypeWithProductsCountEntity implements SubcategoryProductTypeWithProductsCount {
    constructor(
        public id: number,
        public subcategoryId: number,
        public name: string,
        public productsCount: number
    ) { }
}