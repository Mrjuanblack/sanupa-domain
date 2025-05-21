import { UserRole } from "./User";
export declare enum CustomerSupportType {
    Partner_UnableToSendOnTime = 1,
    Partner_NoStock = 2
}
export declare enum CustomerSupportAnswer {
    Partner_UnableToSendOnTime_Reprogram = 1,
    Partner_UnableToSendOnTime_Cancel = 2,
    Partner_NoStock_SendAnyway = 3,
    Partner_NoStock_Cancel = 4
}
export declare const CustomerSupportTypeList: CustomerSupportType[];
export declare function getCustomerSupportTypeString(customerSupportType: CustomerSupportType): string;
export declare const isAnswerAllowedByRole: (role: UserRole, answer: CustomerSupportAnswer) => boolean;
export interface CustomerSupport {
    childOrderId: number;
    type: CustomerSupportType;
    answer: CustomerSupportAnswer | null;
}
export declare class CustomerSupportEntity implements CustomerSupport {
    childOrderId: number;
    type: CustomerSupportType;
    answer: CustomerSupportAnswer | null;
    constructor(childOrderId: number, type: CustomerSupportType, answer: CustomerSupportAnswer | null);
}
export interface NewCustomerSupport {
    childOrderId: number;
    type: CustomerSupportType;
}
