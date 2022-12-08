import { Product } from "../../models";

export type CartState = {
    products: Product[],
    total: number,
    addToCart: any,
    removeItem: any
}

export const initialState = {
    products: [],
    total: 0,
    addToCart: null,
    removeItem: null,
}