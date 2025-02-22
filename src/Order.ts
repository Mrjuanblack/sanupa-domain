import { SimplePartnerProductEntity } from "./PartnerProduct"

enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,

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
        case OrderState.Cancelled:
            return "Cancelado";
    }
}

enum DeliveryTime {
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

interface ParentOrder {
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

interface ChildOrder {
    parentOrderId: number
    state: OrderState
    price: number

    products: SimplePartnerProductEntity[]
}

export class ChildOrderEntity implements ChildOrder {
    constructor(
        public parentOrderId: number,
        public state: OrderState,
        public price: number,
        public products: SimplePartnerProductEntity[]
    ) { }
}