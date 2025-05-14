export interface NewProductErrorReport {
    productId: number
    generalDescription: string | null
    nameSuggestion: string | null
    descriptionSuggestion: string | null
}

export interface ProductErrorReport {
    id: number
    productId: number
    generalDescription: string | null
    nameSuggestion: string | null
    descriptionSuggestion: string | null
    createdAt: Date
    resolvedAt: Date | null
}

export class ProductErrorReportEntity implements ProductErrorReport {
    constructor(
        public id: number,
        public productId: number,
        public generalDescription: string | null,
        public nameSuggestion: string | null,
        public descriptionSuggestion: string | null,
        public createdAt: Date,
        public resolvedAt: Date | null
    ) { }
}
