"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReport_IncorrectInformationEntity = exports.ProductReport_InvalidCodeEntity = exports.ProductReportType = void 0;
var ProductReportType;
(function (ProductReportType) {
    ProductReportType[ProductReportType["InvalidCode"] = 1] = "InvalidCode";
    ProductReportType[ProductReportType["IncorrectInformation"] = 2] = "IncorrectInformation";
})(ProductReportType || (exports.ProductReportType = ProductReportType = {}));
class ProductReport_InvalidCodeEntity {
    constructor(id, code, imgPath) {
        this.id = id;
        this.code = code;
        this.imgPath = imgPath;
        this.productReportType = ProductReportType.InvalidCode;
    }
}
exports.ProductReport_InvalidCodeEntity = ProductReport_InvalidCodeEntity;
class ProductReport_IncorrectInformationEntity {
    constructor(id, productId, productName, productImg, errorDescription) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.productImg = productImg;
        this.errorDescription = errorDescription;
        this.productReportType = ProductReportType.IncorrectInformation;
    }
}
exports.ProductReport_IncorrectInformationEntity = ProductReport_IncorrectInformationEntity;
