export declare enum ProductReportType {
    InvalidCode = 1,
    IncorrectInformation = 2
}
interface BaseProductReport {
    id: number;
    productReportType: ProductReportType;
}
export interface ProductReport_InvalidCode extends BaseProductReport {
    code: string;
    imgPath: string;
}
export interface ProductReport_IncorrectInformation extends BaseProductReport {
    productId: number;
    productName: string;
    productImg: string;
    errorDescription: string;
}
export declare class ProductReport_InvalidCodeEntity implements ProductReport_InvalidCode {
    id: number;
    code: string;
    imgPath: string;
    productReportType: ProductReportType;
    constructor(id: number, code: string, imgPath: string);
}
export declare class ProductReport_IncorrectInformationEntity implements ProductReport_IncorrectInformation {
    id: number;
    productId: number;
    productName: string;
    productImg: string;
    errorDescription: string;
    productReportType: ProductReportType;
    constructor(id: number, productId: number, productName: string, productImg: string, errorDescription: string);
}
export interface NewProductReport_InvalidCodeRequest {
    code: string;
}
export interface NewProductReport_IncorrectInformation {
    productId: number;
    errorDescription: string;
}
export {};
