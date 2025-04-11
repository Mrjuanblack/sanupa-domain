export interface ErrorReport {
    id: number;
    productId: number;
    content: string;
}
export declare class ErrorReportEntity implements ErrorReport {
    id: number;
    productId: number;
    content: string;
    constructor(id: number, productId: number, content: string);
}
export interface NewErrorReportRequest {
    productId: number;
    content: string;
}
