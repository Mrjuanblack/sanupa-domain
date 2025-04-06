import { PP_Filter } from "./PartnerProduct"

export enum AdminReviewSortType {
    NoReviewed = 1,
    PendingReview = 2
}

export interface PaginationRequest {
    page: number,
    pageSize: number
}

export interface PaginationRequest_AdminReviewProducts extends PaginationRequest {
    sortType: AdminReviewSortType
}

export interface PaginationRequestWithFilter extends PaginationRequest {
    filter: PP_Filter
}

export class PaginationRequestEntity implements PaginationRequest {
    constructor(public page: number, public pageSize: number) { }
}

export class PaginationRequestWithFilterEntity implements PaginationRequestWithFilter {
    constructor(
        public page: number,
        public pageSize: number,
        public filter: PP_Filter
    ) { }
}

export interface PaginationResult<T> {
    items: T[],
    totalItems: number,
    page: number,
    pageSize: number
}

export class PaginationResultEntity<T> implements PaginationResult<T> {
    constructor(
        public items: T[],
        public totalItems: number,
        public page: number,
        public pageSize: number
    ) { }
}