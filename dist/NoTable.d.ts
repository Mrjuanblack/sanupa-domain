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
export {};
