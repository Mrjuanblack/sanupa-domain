export interface Product {
    id: number
}

export class ProductEntity implements Product {
    constructor(public id: number) { }
}