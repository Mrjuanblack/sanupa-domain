export interface PaginationRequest {
    page: number;
    pageSize: number;
}
export declare class PaginationRequestEntity implements PaginationRequest {
    page: number;
    pageSize: number;
    constructor(page: number, pageSize: number);
}
export interface PaginationResult<T> {
    items: T[];
    totalItems: number;
    page: number;
    pageSize: number;
}
export declare class PaginationResultEntity<T> implements PaginationResult<T> {
    items: T[];
    totalItems: number;
    page: number;
    pageSize: number;
    constructor(items: T[], totalItems: number, page: number, pageSize: number);
}
