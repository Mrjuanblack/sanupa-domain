export interface CustomerSupport {
    childOrderId: number;
    userId: number;
    text: string;
    img: string | null;
}
export declare class CustomerSupportEntity implements CustomerSupport {
    childOrderId: number;
    userId: number;
    text: string;
    img: string | null;
    constructor(childOrderId: number, userId: number, text: string, img: string | null);
}
export interface NewCustomerSupport {
    childOrderId: number;
    text: string;
}
export declare class NewCustomerSupportEntity implements NewCustomerSupport {
    childOrderId: number;
    text: string;
    constructor(childOrderId: number, text: string);
}
