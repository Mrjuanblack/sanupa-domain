export enum ProductReportType {
    InvalidCode = 1,
    IncorrectInformation = 2
}
interface BaseProductReport {
    id: number
    productReportType: ProductReportType
}

export interface ProductReport_InvalidCode extends BaseProductReport {
    code: string
    imgPath: string
}

export interface ProductReport_IncorrectInformation extends BaseProductReport {
    productId: number
    productName: string
    productImg: string
    errorDescription: string
}

export class ProductReport_InvalidCodeEntity implements ProductReport_InvalidCode {
    public productReportType: ProductReportType;
    constructor(
        public id: number,
        public code: string,
        public imgPath: string
    ) {
        this.productReportType = ProductReportType.InvalidCode;
    }
}

export class ProductReport_IncorrectInformationEntity implements ProductReport_IncorrectInformation {
    public productReportType: ProductReportType;
    constructor(
        public id: number,
        public productId: number,
        public productName: string,
        public productImg: string,
        public errorDescription: string
    ) {
        this.productReportType = ProductReportType.IncorrectInformation;
    }
}

export interface NewProductReport_InvalidCodeRequest {
    code: string
}

export interface NewProductReport_IncorrectInformation {
    productId: number
    errorDescription: string
}