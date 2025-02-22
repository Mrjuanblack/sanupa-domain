import { SimplePartnerProductEntity } from "./PartnerProduct"

enum OrderState {
    Started = 1,
    Packed = 2,
    InRoute = 3,
    Arrived = 4,
    Delivered = 5,

    Cancelled = 99
}

enum DeliveryTime {
    Morning = 1,
    MiddleDay = 2,
    Afternoon = 3
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