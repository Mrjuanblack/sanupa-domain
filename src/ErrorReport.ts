export interface ErrorReport {
    id: number
    productId: number

    content: string
}

export class ErrorReportEntity implements ErrorReport {
    constructor(
        public id: number,
        public productId: number,
        public content: string
    ) { }
}

export interface NewErrorReportRequest {
    productId: number
    content: string
}