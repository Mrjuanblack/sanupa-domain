import { PP_Filter } from "./PartnerProduct";
import { ProductState } from "./Product";
export interface PaginationRequest {
    page: number;
    pageSize: number;
}
export interface PaginationRequest_AdminReviewProducts extends PaginationRequest {
    productState: ProductState;
}
export interface PaginationRequestWithFilter extends PaginationRequest {
    filter: PP_Filter;
}
export interface PaginationRequest_DateRange extends PaginationRequest {
    startDate: Date | null;
    endDate: Date | null;
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
export declare class PaginationRequest_DateRangeEntity implements PaginationRequest_DateRange {
    page: number;
    pageSize: number;
    startDate: Date | null;
    endDate: Date | null;
    constructor(page: number, pageSize: number, startDate: Date | null, endDate: Date | null);
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
