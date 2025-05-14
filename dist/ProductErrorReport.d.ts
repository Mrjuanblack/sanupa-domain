export interface NewProductErrorReport {
    productId: string;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
}
export interface ProductErrorReport {
    productId: number;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
}
export declare class ProductErrorReportEntity implements ProductErrorReport {
    productId: number;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
    constructor(productId: number, generalDescription: string | null, nameSuggestion: string | null, descriptionSuggestion: string | null, createdAt: Date, resolvedAt: Date | null);
}
