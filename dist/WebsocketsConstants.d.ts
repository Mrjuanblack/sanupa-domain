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
export declare enum WS_NotificationEvents {
    Refresh = "notificationRefresh",
    UpdateStock = "notificationUpdateStock",
    RegularNotification = "notificationRegular"
}
export interface WS_NotificationData_Counters {
    myCartCount: MyCartCount;
    myStoreCount: MyStoreCount | null;
    myDeliveriesCount: MyDeliveriesCount | null;
    myStoreStats: MyStoreStats | null;
}
export interface WS_NotificationData_UpdateStock {
    partnerProductId: number;
    newStock: number | null;
}
export declare enum WS_RegularNotificationType {
    DeliveryTimeWarning = 1,
    DeliveryTimeFailure = 2
}
export interface WS_NotificationData_RegularNotification {
    type: WS_RegularNotificationType;
    id: number;
    userId: number;
    orderId: number | null;
}
export declare class WS_Notifications {
    static GetNotificationRoomName: (userId: number) => string;
    static GetNotificationEventName_Error: (userId: number) => string;
    static GetNotificationEventName_Connected: (userId: number) => string;
}
