"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResultEntity = exports.PaginationRequestWithFilterEntity = exports.PaginationRequestEntity = exports.AdminReviewSortType = void 0;
var AdminReviewSortType;
(function (AdminReviewSortType) {
    AdminReviewSortType[AdminReviewSortType["NoReviewed"] = 1] = "NoReviewed";
    AdminReviewSortType[AdminReviewSortType["PendingReview"] = 2] = "PendingReview";
})(AdminReviewSortType || (exports.AdminReviewSortType = AdminReviewSortType = {}));
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
class PaginationResultEntity {
    constructor(items, totalItems, page, pageSize) {
        this.items = items;
        this.totalItems = totalItems;
        this.page = page;
        this.pageSize = pageSize;
    }
}
exports.PaginationResultEntity = PaginationResultEntity;
