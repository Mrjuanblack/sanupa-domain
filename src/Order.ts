import { ZoneEntity } from "./Location";
import { SimplePartnerInfoEntity } from "./PartnerInfo";
import { PartnerProductEntiy } from "./PartnerProduct"
import { SimpleUserEntity } from "./User";

export enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,

    Finished = 98,
    Cancelled = 99
}
export const OrderStateList = Object.values(OrderState).filter(value => typeof value === 'number');
export function getOrderStateString(orderState: OrderState): string {
    switch (orderState) {
        case OrderState.Started:
            return "Empezado";
        case OrderState.Packed:
            return "Empacado";
        case OrderState.InRoute:
            return "En Ruta";
        case OrderState.Arrived:
            return "En la ubicación de entrega";
        case OrderState.Delivered:
            return "Entregado";
        case OrderState.Finished:
            return "Finalizado";
        case OrderState.Cancelled:
            return "Cancelado";
    }
}
export const isOrderEditable = (orderState: OrderState): boolean => {
    const allowedStates = [OrderState.Started, OrderState.Packed]
    return allowedStates.includes(orderState)
}

export enum DeliveryTime {
    Morning = 1,
    MiddleDay = 2,
    Afternoon = 3
}
export const DeliveryTimeList = Object.values(DeliveryTime).filter(value => typeof value === 'number');
export function getDeliveryTimeString(deliveryTime: DeliveryTime): string {
    switch (deliveryTime) {
        case DeliveryTime.Morning:
            return "07:00 AM - 12:00 PM"
        case DeliveryTime.MiddleDay:
            return "12:00 PM - 2:00 PM"
        case DeliveryTime.Afternoon:
            return "2:00 PM - 6:00pm"
    }
}
export function getDeliveryMaxTimeString(deliveryTime: DeliveryTime): string {
    switch (deliveryTime) {
        case DeliveryTime.Morning:
            return "12:00 PM"
        case DeliveryTime.MiddleDay:
            return "2:00 PM"
        case DeliveryTime.Afternoon:
            return "6:00 PM"
    }
}

export interface ParentOrder {
    id: number
    userId: number
    name: string
    address: string
    zone: ZoneEntity

    createdAt: Date
    childOrders: ChildOrder[]

    deliveryDate: Date
    deliveryTime: DeliveryTime
}

export class ParentOrderEntity implements ParentOrder {
    constructor(
        public id: number,
        public userId: number,
        public name: string,
        public address: string,
        public zone: ZoneEntity,
        public createdAt: Date,
        public childOrders: ChildOrder[],
        public deliveryDate: Date,
        public deliveryTime: DeliveryTime
    ) { }
}

export interface SimpleParentOrder {
    id: number
    userId: number
    name: string
    address: string

    zone: ZoneEntity

    createdAt: Date

    deliveryDate: Date
    deliveryTime: DeliveryTime
}

export class SimpleParentOrderEntity implements SimpleParentOrder {
    constructor(
        public id: number,
        public userId: number,
        public name: string,
        public address: string,
        public zone: ZoneEntity,
        public createdAt: Date,
        public deliveryDate: Date,
        public deliveryTime: DeliveryTime,
    ) { }
}

export interface NewOrderRequest {
    deliveryDate: Date
    deliveryTime: DeliveryTime
}

export class NewOrderRequestEntity implements NewOrderRequest {
    constructor(
        public deliveryDate: Date,
        public deliveryTime: DeliveryTime
    ) { }
}

export interface OrderItem {
    id: number
    childOrderId: number
    product: PartnerProductEntiy
    price: number
    quantity: number
    quantityChecked: number
}

export class OrderItemEntity implements OrderItem {
    constructor(
        public id: number,
        public childOrderId: number,
        public product: PartnerProductEntiy,
        public price: number,
        public quantity: number,
        public quantityChecked: number
    ) { }
}

export interface ChildOrder_MonthlyOverview {
    datePeriod: Date
    totalChildOrders: number
    totalIncome: number
    totalIncomDelivery: number
}

export class ChildOrder_MonthlyOverviewEntity implements ChildOrder_MonthlyOverview {
    constructor(
        public datePeriod: Date,
        public totalChildOrders: number,
        public totalIncome: number,
        public totalIncomDelivery: number
    ) { }
}

export interface ChildOrder {
    id: number
    parentOrder: SimpleParentOrderEntity
    state: OrderState
    deliveryPrice: number
    evidenceImg: string | null

    deliveryUserId: number | null
    deliveryUserAccepted: boolean

    hasCustomerSupport: boolean
    products: OrderItemEntity[]

    updatedAt: Date
    rating: number | null
}

export class ChildOrderEntity implements ChildOrder {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public state: OrderState,
        public deliveryPrice: number,
        public evidenceImg: string | null,
        public deliveryUserId: number | null,
        public deliveryUserAccepted: boolean,
        public hasCustomerSupport: boolean,
        public products: OrderItemEntity[],
        public updatedAt: Date,
        public rating: number | null
    ) { }
}

export interface ChildOrder_Admin {
    id: number
    parentOrder: SimpleParentOrderEntity
    user: SimpleUserEntity
    state: OrderState
    deliveryPrice: number
    deliveryUserId: number | null
    deliveryUserAccepted: boolean
    evidenceImg: string | null

    hasCustomerSupport: boolean
    products: OrderItemEntity[]
    updatedAt: Date
    rating: number | null
}

export class ChildOrder_AdminEntity implements ChildOrder_Admin {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public user: SimpleUserEntity,
        public state: OrderState,
        public deliveryPrice: number,
        public deliveryUserId: number | null,
        public deliveryUserAccepted: boolean,
        public evidenceImg: string | null,
        public hasCustomerSupport: boolean,
        public products: OrderItemEntity[],
        public updatedAt: Date,
        public rating: number | null
    ) { }

}

export interface SimpleChildOrder {
    id: number,
    parentOrder: SimpleParentOrderEntity
    state: OrderState
    price: number
    deliveryPrice: number
    deliveryUserId: number | null
    deliveryUserAccepted: boolean
    partnerInformation: SimplePartnerInfoEntity
    hasCustomerSupport: boolean
    updatedAt: Date
    rating: number | null
}

export class SimpleChildOrderEntity implements SimpleChildOrder {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public state: OrderState,
        public price: number,
        public deliveryPrice: number,
        public deliveryUserId: number | null,
        public deliveryUserAccepted: boolean,
        public partnerInformation: SimplePartnerInfoEntity,
        public hasCustomerSupport: boolean,
        public updatedAt: Date,
        public rating: number | null
    ) { }
}

export interface SimpleChildOrder_Partner {
    id: number,
    parentOrder: SimpleParentOrderEntity
    state: OrderState
    price: number
    deliveryPrice: number
    deliveryUserAccepted: boolean
    deliveryUserId: number | null
    updatedAt: Date
    rating: number | null
}

export class SimpleChildOrder_PartnerEntity implements SimpleChildOrder_Partner {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public state: OrderState,
        public price: number,
        public deliveryPrice: number,
        public deliveryUserAccepted: boolean,
        public deliveryUserId: number | null,
        public updatedAt: Date,
        public rating: number | null
    ) { }
}

export interface SimpleChildOrder_Admin {
    id: number
    parentOrder: SimpleParentOrderEntity
    user: SimpleUserEntity
    state: OrderState
    price: number
    deliveryPrice: number
    deliveryUserId: number | null
    deliveryUserAccepted: boolean
    evidenceImg: string | null
    partnerInformation: SimplePartnerInfoEntity
    hasCustomerSupport: boolean
    updatedAt: Date
    rating: number | null
}

export class SimpleChildOrder_AdminEntity implements SimpleChildOrder_Admin {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public user: SimpleUserEntity,
        public state: OrderState,
        public price: number,
        public deliveryPrice: number,
        public deliveryUserId: number | null,
        public deliveryUserAccepted: boolean,
        public evidenceImg: string | null,
        public partnerInformation: SimplePartnerInfoEntity,
        public hasCustomerSupport: boolean,
        public updatedAt: Date,
        public rating: number | null
    ) { }
}

export interface OrderReport {
    partnerId: number
    gtin: string | null
    name: string
    quantity: number
}

export class OrderReportEntity implements OrderReport {
    constructor(
        public partnerId: number,
        public gtin: string | null,
        public name: string,
        public quantity: number
    ) { }
}