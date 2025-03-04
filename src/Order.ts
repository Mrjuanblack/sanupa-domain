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

export interface ParentOrder {
    id: number
    userId: number

    createdAt: Date
    childOrders: ChildOrder[]

    deliveryDate: Date
    deliveryTime: DeliveryTime
}

export class ParentOrderEntity implements ParentOrder {
    constructor(
        public id: number,
        public userId: number,
        public createdAt: Date,
        public childOrders: ChildOrder[],
        public deliveryDate: Date,
        public deliveryTime: DeliveryTime
    ) { }
}

export interface SimpleParentOrder {
    id: number
    userId: number

    createdAt: Date

    deliveryDate: Date
    deliveryTime: DeliveryTime
}

export class SimpleParentOrderEntity implements SimpleParentOrder {
    constructor(
        public id: number,
        public userId: number,
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
    product: PartnerProductEntiy
    price: number
    quantity: number
    checked: boolean
}

export class OrderItemEntity implements OrderItem {
    constructor(
        public id: number,
        public product: PartnerProductEntiy,
        public price: number,
        public quantity: number,
        public checked: boolean
    ) { }
}

export interface ChildOrder {
    id: number
    parentOrder: SimpleParentOrderEntity
    state: OrderState
    deliveryPrice: number
    evidenceImg: string | null

    hasCustomerSupport: boolean
    products: OrderItemEntity[]
}

export class ChildOrderEntity implements ChildOrder {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public state: OrderState,
        public deliveryPrice: number,
        public evidenceImg: string | null,
        public hasCustomerSupport: boolean,
        public products: OrderItemEntity[]
    ) { }
}

export interface ChildOrder_Admin {
    id: number
    parentOrder: SimpleParentOrderEntity
    user: SimpleUserEntity
    state: OrderState
    deliveryPrice: number
    evidenceImg: string | null

    hasCustomerSupport: boolean
    products: OrderItemEntity[]
}

export class ChildOrder_AdminEntity implements ChildOrder_Admin {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public user: SimpleUserEntity,
        public state: OrderState,
        public deliveryPrice: number,
        public evidenceImg: string | null,
        public hasCustomerSupport: boolean,
        public products: OrderItemEntity[]
    ) { }

}

export interface SimpleChildOrder {
    id: number,
    parentOrder: SimpleParentOrderEntity
    state: OrderState
    price: number
    deliveryPrice: number
    partnerInformation: SimplePartnerInfoEntity
    hasCustomerSupport: boolean
}

export class SimpleChildOrderEntity implements SimpleChildOrder {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public state: OrderState,
        public price: number,
        public deliveryPrice: number,
        public partnerInformation: SimplePartnerInfoEntity,
        public hasCustomerSupport: boolean,
    ) { }
}

export interface SimpleChildOrder_Admin {
    id: number
    parentOrder: SimpleParentOrderEntity
    user: SimpleUserEntity
    state: OrderState
    price: number
    deliveryPrice: number
    evidenceImg: string | null
    partnerInformation: SimplePartnerInfoEntity
    hasCustomerSupport: boolean
}

export class SimpleChildOrder_AdminEntity implements SimpleChildOrder_Admin {
    constructor(
        public id: number,
        public parentOrder: SimpleParentOrderEntity,
        public user: SimpleUserEntity,
        public state: OrderState,
        public price: number,
        public deliveryPrice: number,
        public evidenceImg: string | null,
        public partnerInformation: SimplePartnerInfoEntity,
        public hasCustomerSupport: boolean,
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