export interface SubcategoryBrand {
    id: number
    subcategoryId: number
    name: string
}

export interface SubcategoryBrandWithProductsCount extends SubcategoryBrand {
    productsCount: number
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

export class SubcategoryBrandWithProductsCountEntity implements SubcategoryBrandWithProductsCount {
    constructor(
        public id: number,
        public subcategoryId: number,
        public name: string,
        public productsCount: number
    ) { }
}