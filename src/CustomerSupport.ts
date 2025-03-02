export interface CustomerSupport {
    childOrderId: number
    userId: number

    text: string
    img: string | null
}

export class CustomerSupportEntity implements CustomerSupport {
    constructor(
        public childOrderId: number,
        public userId: number,
        public text: string,
        public img: string | null
    ) { }
}

export interface NewCustomerSupport {
    childOrderId: number

    text: string
}

export class NewCustomerSupportEntity implements NewCustomerSupport {
    constructor(
        public childOrderId: number,
        public text: string
    ) { }
}