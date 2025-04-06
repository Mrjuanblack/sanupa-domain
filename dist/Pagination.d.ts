import { PP_Filter } from "./PartnerProduct";
export declare enum AdminReviewSortType {
    NoReviewed = 1,
    PendingReview = 2,
    Reviewed = 3
}
export interface PaginationRequest {
    page: number;
    pageSize: number;
}
export interface PaginationRequest_AdminReviewProducts extends PaginationRequest {
    sortType: AdminReviewSortType;
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
