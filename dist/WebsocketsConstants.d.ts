export declare enum WS_Emails {
    EmailProgress = "emailProgress",
    EmailError = "emailError"
}
export interface EmailProgressResult {
    index: number;
    total: number;
}
export interface EmailError {
    index: number;
    total: number;
    error: string;
}
export declare enum WS_ProductsCreate {
    ProductsCreateProgress = "productsCreateProgress",
    ProductsCreateError = "productsCreateError"
}
export interface EmailProgressResult {
    index: number;
    total: number;
}
export interface EmailError {
    index: number;
    total: number;
    error: string;
}
