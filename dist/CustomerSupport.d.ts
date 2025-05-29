import { UserRole } from "./User";
export declare enum CustomerSupportType {
    Partner_UnableToSendOnTime = 1,
    Partner_NoStock = 2,
    User_NotOnTime = 3,
    User_Generic = 4
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
export declare const isAnswerAllowedByType: (type: CustomerSupportType, answer: CustomerSupportAnswer) => boolean;
export interface CustomerSupport {
    childOrderId: number;
    userCreatorId: number;
    userAnsweredId: number;
    type: CustomerSupportType;
    answer: CustomerSupportAnswer | null;
    genericText: string | null;
}
export declare class CustomerSupportEntity implements CustomerSupport {
    childOrderId: number;
    userCreatorId: number;
    userAnsweredId: number;
    type: CustomerSupportType;
    answer: CustomerSupportAnswer | null;
    genericText: string | null;
    constructor(childOrderId: number, userCreatorId: number, userAnsweredId: number, type: CustomerSupportType, answer: CustomerSupportAnswer | null, genericText: string | null);
}
export interface NewCustomerSupport {
    childOrderId: number;
    type: CustomerSupportType;
    genericText: string | null;
}
