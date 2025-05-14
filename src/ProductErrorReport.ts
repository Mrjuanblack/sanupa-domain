export interface NewProductErrorReport {
    productId: string
    generalDescription: string | null
    nameSuggestion: string | null
    descriptionSuggestion: string | null
}

export interface ProductErrorReport {
    productId: number
    generalDescription: string | null
    nameSuggestion: string | null
    descriptionSuggestion: string | null
    createdAt: Date
    resolvedAt: Date | null
}

export class ProductErrorReportEntity implements ProductErrorReport {
    constructor(
        public productId: number,
        public generalDescription: string | null,
        public nameSuggestion: string | null,
        public descriptionSuggestion: string | null,
        public createdAt: Date,
        public resolvedAt: Date | null
    ) { }
}
