import { MyCartCount, MyStoreCount, MyDeliveriesCount, MyStoreStats } from "./NoTable"

export interface WS_GenericError {
    error: string
}

export enum WS_Emails {
    EmailProgress = "emailProgress",
    EmailError = "emailError"
}

export interface EmailProgressResult {
    index: number
    total: number
}

export interface EmailError {
    index: number
    total: number
    error: string
}

export enum WS_ProductsCreate {
    ProductsCreateProgress = "productsCreateProgress",
    ProductsCreateError = "productsCreateError"
}

export interface ProductsCreateProgressResult {
    index: number
    total: number
}

export interface ProductsCreateError {
    index: number
    total: number
    error: string
}

// Notifications
export enum WS_NotificationEvents {
    Refresh = "notificationRefresh",
    UpdateStock = "notificationUpdateStock"
}

export interface WS_NotificationData_Counters{
    myCartCount: MyCartCount
    myStoreCount: MyStoreCount | null
    myDeliveriesCount: MyDeliveriesCount | null
    myStoreStats: MyStoreStats | null
}

export interface WS_NotificationData_UpdateStock {
    partnerProductId: number
    newStock: number | null
}

export class WS_Notifications {
    static GetNotificationRoomName = (userId: number) => {
        return `notification:${userId}`
    }

    static GetNotificationEventName_Error = (userId: number) => {
        return `notificationError:${userId}`
    }

    static GetNotificationEventName_Connected = (userId: number) => {
        return `notificationConnected:${userId}`
    }
}