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