export interface ProductRequest {
    code: string,
    createdByUserId: number
}

export class ProductRequestEntity implements ProductRequest {
    constructor(
        public code: string,
        public createdByUserId: number
    ) { }
}

export interface CreateProductRequestRequest {
    code: string,
    createdByUserId: number
}