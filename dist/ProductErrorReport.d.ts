export interface NewProductErrorReport {
    productId: number;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
}
export interface ProductErrorReport {
    id: number;
    productId: number;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
}
export declare class ProductErrorReportEntity implements ProductErrorReport {
    id: number;
    productId: number;
    generalDescription: string | null;
    nameSuggestion: string | null;
    descriptionSuggestion: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
    constructor(id: number, productId: number, generalDescription: string | null, nameSuggestion: string | null, descriptionSuggestion: string | null, createdAt: Date, resolvedAt: Date | null);
}
