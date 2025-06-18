interface ProductsOverview {
    name: string;
    imagePath: string;
    price: number;
    quantity: number;
    checked: boolean;
}
export declare class ProductsOverviewEntity implements ProductsOverview {
    name: string;
    imagePath: string;
    price: number;
    quantity: number;
    checked: boolean;
    constructor(name: string, imagePath: string, price: number, quantity: number, checked: boolean);
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
export {};
