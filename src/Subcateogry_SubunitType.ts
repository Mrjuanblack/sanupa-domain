export interface SubcategorySubunitType {
    id: number
    subcategoryId: number
    name: string
}

export interface SubcategorySubunitTypeWithProductsCount extends SubcategorySubunitType {
    productsCount: number
}

export interface NewSubcategorySubunitTypeRequest {
    subcategoryId: number
    name: string
}

export interface UpdateSubcateogrySubunitTypeRequest {
    name: string
}

export class SubcategorySubunitTypeEntity implements SubcategorySubunitType {
    constructor(public id: number, public subcategoryId: number, public name: string) { }
}

export class SubcategorySubunitTypeWithProductsCountEntity implements SubcategorySubunitTypeWithProductsCount {
    constructor(
        public id: number,
        public subcategoryId: number,
        public name: string,
        public productsCount: number
    ) { }
}