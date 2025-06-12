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

// User's suggestions
export interface SubcategoryBrand_Suggestion {
    id: number
    subcategoryId: number
    name: string
    createdBy: number
}

export interface NewSubcategoryBrand_SuggestionRequest {
    subcategoryId: number
    name: string
    createdBy: number
}

export class SubcategoryBrand_SuggestionEntity implements SubcategoryBrand_Suggestion {
    constructor(
        public id: number,
        public subcategoryId: number,
        public name: string,
        public createdBy: number
    ) { }
}