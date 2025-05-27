"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResultEntity = exports.PaginationRequest_DateRangeEntity = exports.PaginationRequestWithFilterEntity = exports.PaginationRequestEntity = void 0;
class PaginationRequestEntity {
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
}
exports.PaginationRequestEntity = PaginationRequestEntity;
class PaginationRequestWithFilterEntity {
    constructor(page, pageSize, filter) {
        this.page = page;
        this.pageSize = pageSize;
        this.filter = filter;
    }
}
exports.PaginationRequestWithFilterEntity = PaginationRequestWithFilterEntity;
class PaginationRequest_DateRangeEntity {
    constructor(page, pageSize, startDate, endDate, deliveryTime) {
        this.page = page;
        this.pageSize = pageSize;
        this.startDate = startDate;
        this.endDate = endDate;
        this.deliveryTime = deliveryTime;
    }
}
exports.PaginationRequest_DateRangeEntity = PaginationRequest_DateRangeEntity;
class PaginationResultEntity {
    constructor(items, totalItems, page, pageSize) {
        this.items = items;
        this.totalItems = totalItems;
        this.page = page;
        this.pageSize = pageSize;
    }
}
exports.PaginationResultEntity = PaginationResultEntity;
