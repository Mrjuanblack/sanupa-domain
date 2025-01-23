export interface PaginationRequest {
    page: number,
    pageSize: number
}

export class PaginationRequestEntity implements PaginationRequest {
    constructor(public page: number, public pageSize: number) { }
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