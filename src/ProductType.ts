export interface ProductType {
    id: number
    name: string
}

export interface NewProductTypeRequest {
    name: string
}

export class ProductTypeEntity implements ProductType {
    constructor(public id: number, public name: string) { }
}