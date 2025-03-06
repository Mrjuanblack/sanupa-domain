export interface FavoriteProduct {
    userId: number;
    productId: number;
}
export declare class FavoriteProductEntity implements FavoriteProduct {
    userId: number;
    productId: number;
    constructor(userId: number, productId: number);
}
