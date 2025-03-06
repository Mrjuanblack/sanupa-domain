export interface FavoriteProduct {
    userId: number
    productId: number
}

export class FavoriteProductEntity implements FavoriteProduct {
    constructor(
        public userId: number,
        public productId: number
    ) { }
}