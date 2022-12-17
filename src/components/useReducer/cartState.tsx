import { Product } from "../../models";

export type CartState = {
    products: Product[],
    wishItems: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    addToWishlist: any,
    removeFromWishlist: any,
}

export const cartInitialState = {
    products: [],
    wishItems: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addToWishlist: null,
    removeFromWishlist: null,
}

