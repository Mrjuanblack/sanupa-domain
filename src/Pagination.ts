import { DeliveryTime } from "./Order"
import { PP_Filter } from "./PartnerProduct"
import { ProductState } from "./Product"

export interface PaginationRequest {
    page: number,
    pageSize: number
}

export interface PaginationRequest_AdminReviewProducts extends PaginationRequest {
    productState: ProductState
}

export interface PaginationRequestWithFilter extends PaginationRequest {
    filter: PP_Filter
}

export interface PaginationRequest_DateRange extends PaginationRequest {
    startDate: Date | null
    endDate: Date | null
    deliveryTime: DeliveryTime[]
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

export class PaginationRequest_DateRangeEntity implements PaginationRequest_DateRange {
    constructor(
        public page: number,
        public pageSize: number,
        public startDate: Date | null,
        public endDate: Date | null,
        public deliveryTime: DeliveryTime[]
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