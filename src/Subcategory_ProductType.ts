export interface SubcategoryProductType {
    id: number
    subcategoryId: number
    name: string
}

export interface SubcategoryProductTypeWithProductsCount extends SubcategoryProductType {
    productsCount: number
}

export interface NewSubcategoryProductTypeRequest {
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

// User's suggestions
export interface SubcategoryProductType_Suggestion {
    id: number
    subcategoryId: number
    name: string
    createdBy: number
}

export interface NewSubcategoryProductType_SuggestionRequest {
    subcategoryId: number
    name: string
    createdBy: number
}

export class SubcategoryProductType_SuggestionEntity implements SubcategoryProductType_Suggestion {
    constructor(
        public id: number,
        public subcategoryId: number,
        public name: string,
        public createdBy: number
    ) { }
}