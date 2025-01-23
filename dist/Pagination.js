"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResultEntity = exports.PaginationRequestEntity = void 0;
class PaginationRequestEntity {
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
}
exports.PaginationRequestEntity = PaginationRequestEntity;
class PaginationResultEntity {
    constructor(items, totalItems, page, pageSize) {
        this.items = items;
        this.totalItems = totalItems;
        this.page = page;
        this.pageSize = pageSize;
    }
}
exports.PaginationResultEntity = PaginationResultEntity;
