import { MyCartCount, MyStoreCount, MyDeliveriesCount, MyStoreStats } from "./NoTable";
export interface WS_GenericError {
    error: string;
}
export declare enum WS_Emails {
    EmailProgress = "emailProgress",
    EmailError = "emailError"
}
export interface EmailProgressResult {
    index: number;
    total: number;
}
export interface EmailError {
    index: number;
    total: number;
    error: string;
}
export declare enum WS_ProductsCreate {
    ProductsCreateProgress = "productsCreateProgress",
    ProductsCreateError = "productsCreateError"
}
export interface ProductsCreateProgressResult {
    index: number;
    total: number;
}
export interface ProductsCreateError {
    index: number;
    total: number;
    error: string;
}
export interface WS_NotificationData {
    myCartCount: MyCartCount;
    myStoreCount: MyStoreCount;
    myDeliveriesCount: MyDeliveriesCount;
    myStoreStats: MyStoreStats;
}
export declare class WS_Notifications {
    static GetNotificationRoomName: (userId: number) => string;
    static GetNotificationEventName_Error: (userId: number) => string;
    static GetNotificationEventName_Connected: (userId: number) => string;
}
