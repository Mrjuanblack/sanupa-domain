interface ProductsOverview {
    name: string;
    imagePath: string;
    price: number;
    quantity: number;
    checked: boolean;
}

export class ProductsOverviewEntity implements ProductsOverview {
    constructor(
        public name: string,
        public imagePath: string,
        public price: number,
        public quantity: number,
        public checked: boolean
    ) {}
}

export interface MyCartCount {
    cartCount: number;
    ordersInProgress: number;
}

export interface MyStoreCount {
    ordersInProgress: number;
    ordersInRoute: number;
}

export interface MyDeliveriesCount {
    ordersToAccept: number;
    ordersInRoute: number;
}

export interface MyStoreStats {
    productsSold: number;
    completedOrders: number;
    rating: number;
}