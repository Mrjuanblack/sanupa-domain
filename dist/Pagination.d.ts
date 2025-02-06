import { PP_Filter } from "./PartnerProduct";
export interface PaginationRequest {
    page: number;
    pageSize: number;
}
export interface PaginationRequestWithFilter extends PaginationRequest {
    filter: PP_Filter;
}
export declare class PaginationRequestEntity implements PaginationRequest {
    page: number;
    pageSize: number;
    constructor(page: number, pageSize: number);
}
export declare class PaginationRequestWithFilterEntity implements PaginationRequestWithFilter {
    page: number;
    pageSize: number;
    filter: PP_Filter;
    constructor(page: number, pageSize: number, filter: PP_Filter);
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
