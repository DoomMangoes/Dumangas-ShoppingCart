import { createContext } from "react";
import { CartState, cartInitialState } from '../useReducer/cartState';

export const CartContext = createContext<CartState>(cartInitialState);